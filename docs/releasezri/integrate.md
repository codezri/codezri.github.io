---
title: How to Use
---

Add ReleaseZri to your project with the following steps.

## Create a changelog

ReleaseZri doesn't extract release notes from commit messages since that approach doesn't give meaningful
release notes. It extracts release notes from `CHANGELOG.md` file in your repository. Create changelog with
the following format.

```
# Changelog

Add all code changes (features, deprecations, and enhancements)
under the `Unreleased` topic to track changes for the next release.

## Unreleased

### API: window
- `window.getTitle` returns the current native window title.

## v4.0.0

### API: window
- `window.setTitle` sets the current native window title.
```

There are no strict rules. You only need to use `## Unreleased` for unreleased changes and
level 3 (`###`) or below headings for changes. You can update this changelog manually whenever you need regardless of
what you commit.

## Create a release note template

ReleaseZri generates release notes and embeds to a template. Now add your template to `.releasezri/template.md`
, as shown below.

```
## What's new

{RZ_CHANGELOG}

Get started with {RZ_VERSION}: https://codezri.org/docs/releasezri
```

### Supported template variables

- `RZ_VERSION`: New version number, Eg: `3.2.0`. This doesn't contain `v`, so if you need `v` prefix, you
have to use `v` before this template variable.
- `RZ_CHANGELOG`: Generated release notes markdown. Release notes is extracted from your `CHANGELOG.md`.
- `RZ_RZVERSION`: ReleaseZri script version.
- `RZ_DATE`: System date in `yyyy-mm-dd` format.
- `RZ_TIME`: System time in `hh:mm:ss` format.

## Add the release note generation script

Copy-paste [`scripts/rz.py`](https://github.com/codezri/releasezri/blob/main/scripts/rz.py) into your project.

## Update your DevOps workflow

When you run `rz.py create <version>`, it will generate release notes to `.tmprz/release_notes.md`. Also,
it will update `CHANGELOG.md` by adding the new version. You can run `rz.py cleanup` to remove
the `.tmprz` directory after using the generated release note.

You can use this release note generation script locally or with any DevOps pipleline. For example, see how to
integrate ReleaseZri with GitHub Actions.

Add a workflow step to create release notes.

```yaml
- name: Create Release Notes
  run: |
    chmod +x ./scripts/rz.py
    ./scripts/rz.py create ${{github.event.inputs.version}}
```

## Check for unreleased changes (optional)

Before creating a release, you may want to confirm there are actually unreleased changes to avoid
publishing an empty release. Run `rz.py check`, which prints `ST_HAS_CHANGES` or `ST_NO_CHANGES`
depending on whether the `Unreleased` section in `CHANGELOG.md` has content.

```yaml
- name: Check for unreleased changes
  id: check
  run: |
    chmod +x ./scripts/rz.py
    echo "status=$(./scripts/rz.py check)" >> $GITHUB_OUTPUT

- name: Stop if no changes
  if: steps.check.outputs.status == 'ST_NO_CHANGES'
  run: |
    echo "No unreleased changes found."
    exit 1
```

Send a pull request with the changelog updates. We no longer commit directly to the default branch —
instead, a dedicated branch is created and a pull request is opened, so the change can be reviewed
before merging.

```yaml
- name: Send a pull request for the modified changelog
  if: ${{ env.VERSION != 'nightly' }}
  run: |
    branch=changelog-update-$VERSION_WITH_V

    git checkout -b $branch
    git add CHANGELOG.md

    git config user.name "github-actions[bot]"
    git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

    git commit -m "Update changelog for $VERSION_WITH_V"
    git push origin $branch

    gh pr create \
      --title "Update changelog after $VERSION_WITH_V release" \
      --body "This pull request updates CHANGELOG.md file after the recent release." \
      --assignee "${{ github.actor }}"
  env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Finally, publish your release with notes and artifacts.

```yaml
- name: Create a GitHub release
  run: |
    gh release create v${{github.event.inputs.version}} \
      --title "Neutralinojs v${{github.event.inputs.version}} released!" \
      --notes-file ./.tmprz/release_notes.md
  env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

See a complete workflow
[here](https://github.com/neutralinojs/neutralinojs/blob/main/.github/workflows/create_release.yml).
The ReleaseZri project itself maintains release notes with ReleaseZri.
See its workflow [here](https://github.com/codezri/releasezri/blob/main/.github/workflows/create-release.yml).

If you need to learn more about DevOps practices and why we built ReleaseZri you can read
[this](https://codezri.org/blog/how-we-save-our-time-with-devops) article.