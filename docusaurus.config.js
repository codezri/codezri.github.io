const path = require('path');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CodeZri',
  tagline: 'Open-source tools and educational content for developers',
  url: 'https://codezri.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',
  organizationName: 'codezri',
  projectName: 'codezri.github.io',
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      async: true
    }
  ],
  themeConfig: {
    gtag: {
      trackingID: 'UA-160712034-1',
      anonymizeIP: true,
    },
    navbar: {
      title: 'CodeZri',
      logo: {
        alt: 'CodeZri logo',
        src: 'img/codezri_white.png',
      },
      items: [
        {
          to: 'docs/',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'projects/',
          position: 'left',
          label: 'Projects',
        },
        {
          to: 'blog/',
          position: 'left',
          label: 'Blog',
        },
        {
          to: 'sponsors/',
          position: 'left',
          label: 'Sponsors',
        },
        {
          to: 'foundation/',
          position: 'left',
          label: 'Foundation',
        },
        {
          to: 'shalithasuranga/',
          position: 'left',
          label: 'Founder',
        },
        {
          href: 'https://www.youtube.com/c/CodeZri',
          position: 'right',
          label: 'YouTube',
        },
        {
          href: 'https://github.com/codezri',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.patreon.com/shalithasuranga',
          label: '❤️ Donate',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Open Source',
          items: [
            {
              label: 'CodeZri',
              href: 'https://github.com/codezri',
            },
            {
              label: 'Neutralinojs',
              href: 'https://github.com/neutralinojs',
            },
            {
              label: 'Jerverless',
              href: 'https://github.com/jerverless',
            },
            {
              label: 'Shalitha Suranga',
              href: 'https://github.com/shalithasuranga',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/CodeZri',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/codezri',
            },
            {
              label: 'X',
              href: 'https://www.x.com/codezri',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/92UadNvnfh',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact CodeZri',
              href: 'https://forms.gle/mTxB9gdKsdWPkwBQA',
            },
            {
              label: 'Design guide',
              href: 'https://github.com/codezri/design-guide'
            },
            {
              label: 'Privacy policy',
              to: 'privacy-policy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeZri.org`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/codezri/codezri.github.io/edit/master'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          blogTitle: 'CodeZri blog',
          blogDescription: 'The official blog of CodeZri.org',
          postsPerPage: 10,
        },
      },
    ],
  ],
  plugins: [
    path.resolve('./plugins/load-external-assets')
  ]
};
