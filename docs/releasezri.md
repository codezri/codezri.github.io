---
title: ReleaseZri
---
Meaningful and minimalist release notes for developers

Managing manual release notes is hard. Therefore, everyone tends to generate release notes
from commit messages. But, you won't get a meaningful release note at the end. ReleaseZri offers
you a simple strategy to maintain a human-friendly changelog and generate release notes automatically.
It also gives you GitHub Action workflow steps that you can simply copy-paste into your projects.

[Source code](https://github.com/codezri/releasezri)

## Highlighted features

- Generate release notes and update changelog with one command.
- You don't need to follow a specific commit message format.
- Structure your changelog with a simple format, write content with your own rules.
- Get release notes as a markdown file, use whereever you need.
- Flexible release note template.
- Written in Python, works on any platform.

[Neutralinojs](https://neutralino.js.org) uses ReleaseZri to maintain their release notes.
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

- `RZ_VERSION`: New version, Eg: `v3.2.0`.
- `RZ_CHANGELOG`: Generated release notes markdown. Release notes is extracted from your `CHANGELOG.md`.

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

Add another step to commit and push changelog's updates.

```yaml
- name: Commit and Push Changelog
  uses: EndBug/add-and-commit@v7.4.0
  with:
    default_author: github_actions
    message: 'Update changelog for v${{github.event.inputs.version}}'
    add: 'CHANGELOG.md'
    tag: v${{github.event.inputs.version}}
```

Finally, publish your release with notes and artifacts.

```yaml
- name: Create a GitHub release
  uses: ncipollo/release-action@v1
  with:
      tag: v${{github.event.inputs.version}}
      name: Neutralinojs v${{github.event.inputs.version}} released!
      bodyFile: ./.tmprz/release_notes.md
      artifacts: './bin/neutralinojs-v${{github.event.inputs.version}}.zip'
      draft: true
```

See a complete workflow
[here](https://github.com/neutralinojs/neutralinojs/blob/main/.github/workflows/create_release.yml).
The ReleaseZri project itself maintains release notes with ReleaseZri.
See its workflow [here](https://github.com/codezri/releasezri/blob/main/.github/workflows/create-release.yml).
