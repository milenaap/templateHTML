//import React from 'react';
import { useTranslations } from '../../i18n/utils';


/**
 * @param {{ lang: string }}
 */
export default function LangSelector({ lang }) {

    const t = useTranslations(lang);

  const handleChange = (e) => {
    const newLang = e.target.value;
    const path = window.location.pathname.split('/').slice(2).join('/');
    window.location.pathname = `/${newLang}/${path}`;
  };

  return (
    <select
      className="border rounded px-2 py-1 text-sm text-gray-700"
      onChange={handleChange}
      defaultValue={lang}
    >
      <option value="es">{t('navbar.lang_es')}</option>
      <option value="en">{t('navbar.lang_en')}</option>
    </select>
  );
}
