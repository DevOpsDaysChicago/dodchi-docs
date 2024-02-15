// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'devopsdays Chicago Runbooks',
  tagline: 'Documentation for running the devopsdays Chicago event',
  url: 'https://docs.devopsdayschi.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'devopsdayschicago', // Usually your GitHub org/user name.
  projectName: 'dodchi-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/devopsdayschi/dodchi-docs/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'devopsdays Chicago Runbooks',
        logo: {
          alt: 'devopsdays Chicago Runbooks Logo',
          src: 'img/logo.svg',
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

// export default {
//   plugins: [
//     [
//       '@docusaurus/plugin-content-docs',
//       {
//         async sidebarItemsGenerator({
//           defaultSidebarItemsGenerator,
//           numberPrefixParser,
//           item,
//           version,
//           docs,
//           categoriesMetadata,
//           isCategoryIndex,
//         }) {
//           // Example: return an hardcoded list of static sidebar items
//           return [
//             {type: 'doc', id: 'doc1'},
//             {type: 'doc', id: 'doc2'},
//           ];
//         },
//       },
//     ],
//   ],
// };