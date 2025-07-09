import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Necesario en ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carga manual del JSON con encoding UTF-8 forzado
const es = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'es.json'), 'utf8')
);
const en = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'en.json'), 'utf8')
);

export const languages = { es, en };

export function useTranslations(lang) {
  return function t(key) {
    return key
      .split('.')
      .reduce((obj, segment) => obj?.[segment], languages[lang]) || key;
  };
}
