import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Deku Linux',
  tagline: 'Built in the open. Measured by evidence.',
  favicon: 'img/deku-mark.svg',
  url: 'https://deku-foundation.github.io',
  baseUrl: '/',
  organizationName: 'Deku-Foundation',
  projectName: 'Deku-Foundation.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en', direction: 'ltr'},
      fr: {label: 'Français', htmlLang: 'fr', direction: 'ltr'},
      ar: {label: 'العربية', htmlLang: 'ar', direction: 'rtl'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Deku-Foundation/Deku-Foundation.github.io/edit/dev/site-v2/',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'updates',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent updates',
          editUrl: 'https://github.com/Deku-Foundation/Deku-Foundation.github.io/edit/dev/site-v2/',
          feedOptions: {type: ['rss', 'atom'], xslt: true},
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/deku-mark.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Deku Linux',
      logo: {alt: 'Deku Linux', src: 'img/deku-mark.svg'},
      items: [
        {to: '/ecosystem/', label: 'Ecosystem', position: 'left'},
        {type: 'docSidebar', sidebarId: 'projectSidebar', label: 'Documentation', position: 'left'},
        {to: '/updates/', label: 'Updates', position: 'left'},
        {href: 'https://github.com/Deku-Foundation/deku-linux', label: 'Engineering', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://github.com/Deku-Foundation', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Project',
          items: [
            {label: 'Ecosystem', to: '/ecosystem/'},
            {label: 'Documentation', to: '/docs/'},
            {label: 'Architecture', href: 'https://deku-foundation.github.io/architecture/'},
          ],
        },
        {
          title: 'Participate',
          items: [
            {label: 'Contributing', to: '/docs/contributing/'},
            {label: 'Security', href: 'https://deku-foundation.github.io/security/'},
            {label: 'GitHub organisation', href: 'https://github.com/Deku-Foundation'},
          ],
        },
      ],
      copyright: 'Deku Linux is in development. No official ISO release is available.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
