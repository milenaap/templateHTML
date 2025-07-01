/* ─────────────────────────────────────────────
   Multi-language loader con soporte anidado
────────────────────────────────────────────── */
const lang       = localStorage.getItem("lang") || "es";
const langSwitch = document.querySelector("#langSwitch");

/* ► Devuelve objeto anidado a partir de "a.b.c"  */
function getNestedValue(obj, path) {
  return path.split(".").reduce((o, k) => (o || {})[k], obj);
}

function setLanguage(currentLang) {
  fetch(`./lang/${currentLang}.json`)
    .then(res => res.json())
    .then(data => {
      /* 1. Texto interno (data-i18n) */
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key   = el.getAttribute("data-i18n");
        const value = getNestedValue(data, key);
        if (value) el.textContent = value;
      });

      /* 2. Atributos (data-i18n-attr="alt:logo_alt") */
      document.querySelectorAll("[data-i18n-attr]").forEach(el => {
        const pairs = el.getAttribute("data-i18n-attr").split(",");
        pairs.forEach(pair => {
          const [attr, key] = pair.trim().split(":");
          const value = getNestedValue(data, key);
          if (value) el.setAttribute(attr, value);
        });
      });
    });

  /* Persistir selección */
  localStorage.setItem("lang", currentLang);
  if (langSwitch) langSwitch.value = currentLang;
}

/* ───────── Iniciar ───────── */
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(lang);

  if (langSwitch) {
    langSwitch.addEventListener("change", () => {
      setLanguage(langSwitch.value);
    });
  }
});
