# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Libraries

## i18n

```sh
1. Creamos esta estructura:
src/pages/
├── [lang]/
│   └── index.astro  ← Solo uno para todos los idiomas
src/i18n/
├── es.json
├── en.json

2. Agregar en astro.config.mjs

i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: true }
}

3. Copiar en el archivo src/pages/[lang]/index.astro

---
import { getLangFromUrl, useTranslations } from '../../i18n/utils';

// 👇 Esta es la parte nueva que necesitas
export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } }
  ];
}

const lang = getLangFromUrl(Astro.url); // Detecta el idioma desde la URL
const t = useTranslations(lang);        // Carga las traducciones


---

<html lang={lang}>
  <head>
    <title>{t("home.title")}</title>
  </head>
  <body>
    <h1>{t("home.heading")}</h1>
    <p>{t("home.description")}</p>
  </body>
</html>


4. Crea Archivo utils.js o utils.ts (en src/i18n/utils.js)


import es from './es.json';
import en from './en.json';

export const languages = {
  es,
  en,
};

export function getLangFromUrl(url) {
  const langCode = url.pathname.split('/')[1];
  if (languages[langCode]) return langCode;
  return 'es'; // fallback
}

export function useTranslations(lang) {
  return function t(key) {
    return key
      .split('.')
      .reduce((obj, segment) => obj?.[segment], languages[lang]) || key;
  };
}

5. Traducciones en src/i18n/es.json y src/i18n/en.json

es.json
{
  "home": {
    "title": "Home",
    "heading": "Welcome",
    "description": "This is the English version."
  }
}

en.json

{
  "home": {
    "title": "Home",
    "heading": "Welcome",
    "description": "This is the English version."
  }
}


```






## Tailwind

Entramos a la documentación de AstroJS

```sh

npx astro add tailwind


```