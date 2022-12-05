// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hao Gong',
  tagline: '龚豪的编程笔记',
  url: 'https://xiaohaogongg.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xiaohaogong', // Usually your GitHub org/user name.
  projectName: 'xiaohaogong.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
  
        //docs: {
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
       // },
        blog: {
          showReadingTime: true,
          routeBasePath: "/"
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         
        },
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
        title: 'hao gong',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
         
          { to: 'about', label: '关于我', position: 'left' },
          { to: 'blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/xiaohaogong',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
         
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hao Gong. Built with ❤.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
