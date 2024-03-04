// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const base = '/docusaurus-pr-preview-gh'
const baseUrl = (process.env.PREVIEW_PATH)
  ? `${base}/${process.env.PREVIEW_PATH}`
  : `${base}`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevOpsDays Chicago Runbooks',
  tagline: 'Documentation for running the DevOpsDays Chicago event',
  url: 'https://docs.devopsdayschi.org',
  baseUrl: 'baseurl',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'devopsdayschicago', // Usually your GitHub org/user name.
  projectName: 'dodchi-docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          // editUrl:
          //   'https://github.com/devopsdayschi/dodchi-docs/tree/main/packages/create-docusaurus/templates/shared/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: "in_progress",
      //   content:
      //     "This is a work in progress!",
      //   backgroundColor: "fafbfc",
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      navbar: {
        title: 'devopsdays Chicago Runbooks',
        logo: {
          alt: 'devopsdays Chicago Runbooks Logo',
          src: 'img/chi-logo.png',
        },
        items: [

          {
            href: 'https://github.com/devopsdayschicago/dodchi-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} devopsdays Chicago Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
