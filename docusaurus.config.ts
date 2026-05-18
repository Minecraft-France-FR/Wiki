import { themes as prismThemes } from 'prism-react-renderer';
import type { Config, ThemeConfig } from '@docusaurus/types';
import type { Options as themeClassicOptions } from '@docusaurus/theme-classic';
import type { Options as pluginContentDocsOptions } from '@docusaurus/plugin-content-docs';
import type { Options as pluginContentPagesOptions } from '@docusaurus/plugin-content-pages';
import type { Options as pluginClientRedirectsOptions } from '@docusaurus/plugin-client-redirects';
import type { Options as pluginSitemapOptions } from '@docusaurus/plugin-sitemap';
import type { Options as pluginGoogleGtagOptions } from '@docusaurus/plugin-google-gtag';
import type { Options as pluginSvgrOptions } from '@docusaurus/plugin-svgr';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Wiki Minecraft-France Survie',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wiki.mc-fr-fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Minecraft-France Survie', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  plugins: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: './src/css/custom.css',
      } satisfies themeClassicOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      } satisfies pluginContentDocsOptions,
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
      } satisfies pluginContentPagesOptions,
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-999X9XX9XX',
        anonymizeIP: true,
      } satisfies pluginGoogleGtagOptions,
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        lastmod: 'date',
        changefreq: 'weekly',
        priority: 0.5,
        filename: 'sitemap.xml',
      } satisfies pluginSitemapOptions,
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [],
      } satisfies pluginClientRedirectsOptions,
    ],
    [
      '@docusaurus/plugin-svgr',
      {
        svgrConfig: {},
      } satisfies pluginSvgrOptions,
    ],
    [
      '@docusaurus/plugin-debug',
      {},
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Wiki Minecraft-France Survie',
      logo: {
        alt: 'Logo de Minecraft-France Survie',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutoriel',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutoriel',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'Plus',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies ThemeConfig,
};

export default config;
