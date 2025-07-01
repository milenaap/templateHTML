const lang = localStorage.getItem("lang") || "es";
const langSwitch = document.querySelector("#langSwitch");

function setLanguage(lang) {
  fetch(`./lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      for (const key in data) {
        const el = document.querySelector(`[data-i18n="${key}"]`);
        if (el) {
          el.textContent = data[key];
        }

        // Soporte para atributos personalizados, ej: alt
        const attrEls = document.querySelectorAll(`[data-i18n-attr*="${key}"]`);
        attrEls.forEach(attrEl => {
          const attrMap = attrEl.getAttribute("data-i18n-attr").split(",");
          attrMap.forEach(pair => {
            const [attr, k] = pair.trim().split(":");
            if (k === key) {
              attrEl.setAttribute(attr, data[key]);
            }
          });
        });
      }
    });

  // Guardar selección
  localStorage.setItem("lang", lang);
  
  // Actualizar el <select>
  if (langSwitch) langSwitch.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(lang);

  // Escucha del <select>
  if (langSwitch) {
    langSwitch.addEventListener("change", () => {
      const selectedLang = langSwitch.value;
      setLanguage(selectedLang);
    });
  }
});
