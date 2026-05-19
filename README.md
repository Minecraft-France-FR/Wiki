# Wiki Minecraft-France

Official wiki for the **Minecraft France** server, built with [Docusaurus](https://docusaurus.io/).

## Installation

```bash
npm run dev
```

## Local Development

```bash
npm start
```

Starts a local development server with live hot-reloading.

## Build

```bash
npm run build
```

Generates static files into the `build/` directory.

## Preview the Build Locally

```bash
npm run serve
```

## TypeScript Check

```bash
npm typecheck
```

## Project Structure

```
src/
└── wiki/               # Wiki content (.md / .mdx files)
    ├── accueil.mdx     # Home page
    ├── commandes.md
    ├── jouer/
    ├── le-serveur/
    ├── les-bases/
    ├── les-claims/
    └── l-economie/
static/
└── img/                # Static images
```

## Contributing

Wiki pages are Markdown (`.md`) or MDX (`.mdx`) files located in `src/wiki/`.  
Each folder contains a `_category_.json` file that defines the category name and its position in the sidebar.