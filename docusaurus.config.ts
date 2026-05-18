import { themes as prismThemes } from 'prism-react-renderer';
import type { Config, ThemeConfig } from '@docusaurus/types';
import type { Options as themeClassicOptions } from '@docusaurus/theme-classic';
import type { Options as pluginContentDocsOptions } from '@docusaurus/plugin-content-docs';
import type { Options as pluginClientRedirectsOptions } from '@docusaurus/plugin-client-redirects';
import type { Options as pluginSitemapOptions } from '@docusaurus/plugin-sitemap';
import type { Options as pluginGoogleGtagOptions } from '@docusaurus/plugin-google-gtag';
import type { Options as pluginSvgrOptions } from '@docusaurus/plugin-svgr';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Wiki Minecraft-France Survie',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/endy.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: false,
  },

  // Set the production url of your site here
  url: 'https://wiki.mc-fr-fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Minecraft-France-FR', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  staticDirectories: ['static'],

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
        path: 'src/wiki',
        routeBasePath: '/',
      } satisfies pluginContentDocsOptions,
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
        src: 'img/endy.png',
      },
      items: [
        {
          href: 'https://discord.gg/JNQFBbMbQK',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://map.mc-fr.fr',
          label: 'Dynmap',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Réseaux sociaux',
          items: [
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@mcfrsurvie',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@Minecraft-France-Survie',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/mcfrsurvie/',
            },
          ],
        },
        {
          title: 'Liens utiles',
          items: [
            {
              label: 'Dynmap du serveur',
              href: 'https://map.mc-fr.fr',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Minecraft-France-FR/Wiki',
            },
          ],
        },
        {
          title: 'En savoir plus',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/JNQFBbMbQK',
            },
            {
              label: 'Articles sur le serveur Minecraft',
              href: 'https://www.minecraft-france.fr/serveur-minecraft/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Serveur minecraft de la Communauté Minecraft-France. Non approuvé ou associé à Mojang Studios ou Microsoft.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies ThemeConfig,
};

export default config;
