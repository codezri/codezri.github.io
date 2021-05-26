/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CodeZri',
  tagline: 'Open-source innovations for everyone',
  url: 'https://codezri.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'codezri',
  projectName: 'codezri.github.io',
  themeConfig: {
    navbar: {
      title: 'CodeZri',
      logo: {
        alt: 'CodeZri Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'projects',
          position: 'left',
          label: 'Projects',
        },
        {
          href: 'https://www.youtube.com/c/CodeZri',
          position: 'left',
          label: 'YouTube',
        },
        {
          to: 'shalithasuranga',
          position: 'left',
          label: 'Shalitha Suranga',
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
              href: '#',
            },
            {
              label: 'LinkedIn',
              href: '#',
            },
            {
              label: 'Twitter',
              href: '#',
            },
            {
              label: 'Facebook',
              href: '#',
            },
            {
              label: 'Instagram',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact CodeZri',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeZri.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
