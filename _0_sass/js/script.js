

/**
 * Lógica de ocultar el preload
 */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');

  if (!preloader || !content) return;

  setTimeout(() => {
    // Oculta preloader
    preloader.classList.add('hidden');

    // ⚠️ Forzamos un repaint antes de añadir la clase para que se active la transición
    content.classList.remove('invisible');

    // Esto asegura que el navegador repinte antes de aplicar la transición
    requestAnimationFrame(() => {
      content.classList.add('fade-in');
    });

    // Eliminar el preloader del DOM cuando termine de desvanecerse
    preloader.addEventListener('transitionend', () => preloader.remove());
  }, 1000);
});

