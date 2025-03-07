// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tokomachi Wiki',
  //icon: '/img/android-chrome-192x192.png',
  tagline: 'Treasure every moment',
  url: 'https://toko.suisei.cc',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aozaki-kuro', // Usually your GitHub org/user name.
  projectName: 'tokomachi-wiki-neo', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Switch /docs/ to root
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aozaki-kuro/tokomachi-wiki-neo/edit/master/',
        },
        blog: {
          blogTitle: 'Tokomachi Wiki Dev Blog',
          blogDescription: 'This is the Dev blog of Tokomachi wiki. Not just a blog, but also a handbook :)',
          postsPerPage: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/aozaki-kuro/tokomachi-wiki-neo/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/android-chrome-192x192.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#9d3757',
          },
        ],
      },
    ],
  ],

  scripts: [
    {
      defer: true,
      src: 'https://beacon.suisei.cc/app.js',
      'data-domain': 'toko.suisei.cc',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // metadata
      metadata: [
        /**
        {
          name: 'twitter:card',
          content: 'https://img.suisei.cc/wiki/icon.png',
        },
        */
        /**
         {
           name: 'twitter:site',
           content: 'Tokomachi Wiki | Treasure every moment',
         },
         */
        /**
        {
          name: 'twitter:image',
          content: '/img/android-chrome-192x192.png',
        },
        */
        /**
        {
          name: 'twitter:description',
          content:
            'A Wiki-like site to record Tokomachi activities and details. This site is fan-made, unofficial and non-profit.',
        },
        */
        {
          property: 'og:type',
          content: 'website',
        },
        /**
        {
          property: 'og:title',
          content: 'Tokomachi Wiki | Treasure every moment',
        },
        */
        {
          property: 'og:site_name',
          content: 'Tokomachi Wiki',
        },
        {
          name: 'theme-color',
          content: '#9d3757',
        },
      ],

      // navbar
      navbar: {
        title: 'Tokomachi Wiki',
        logo: {
          alt: 'Tokomachi Wiki',
          src: 'img/android-chrome-192x192.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Main',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/aozaki-kuro/tokomachi-wiki-neo/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // footer
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Timeline',
            items: [
              {
                label: '2019',
                to: '/timeline/2019',
              },
              {
                label: '2020',
                to: '/timeline/2020',
              },
              {
                label: '2021',
                to: '/timeline/2021',
              },
              {
                label: '2022 (WIP)',
                to: '/timeline/2022',
              },
            ],
          },
          {
            title: 'Topics',
            items: [
              {
                label: 'Music & Lives',
                href: '/topics/music_list',
              },
              {
                label: 'Tokomachi Radio',
                href: '/radio/tokomachi_radio_s1',
              },
            ],
          },
          {
            title: 'Channels',
            items: [
              {
                label: 'Suisei Channel',
                href: 'https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A',
              },
              {
                label: 'Inui Channel',
                href: 'https://www.youtube.com/channel/UCXRlIK3Cw_TJIQC5kSJJQMg',
              },
              {
                label: 'Tokomachi Radio Playlist',
                href: 'https://www.youtube.com/playlist?list=PLRGzS-dvI7ZyOXpMyICfMY03vMsuxbL3h',
              },
            ],
          },
        ],
        copyright: `<img src="/img/android-chrome-192x192.png" width="64rem" height="64rem" /><br/>2021-${new Date().getFullYear()} Project Stargazer<br />CC BY-NC-SA 4.0<br />Built with Docusaurus`,
      },

      // dark mode toggle
      colorMode: {
        //defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '\u2604',
          darkIconStyle: {
            marginLeft: '2px',
          },
          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: '\u{1F379}',
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },

      // plugins
      hideableSidebar: true,
      algolia: {
        // The application ID provided by Algolia
        appId: 'MWDE3H8IGO',

        // Public API key: it is safe to commit it
        apiKey: '089020613b342f8bc210b777ec8c33d3',

        indexName: 'main',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: '',

        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
