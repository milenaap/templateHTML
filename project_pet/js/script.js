

/**
 * Lógica de ocultar el preload
 */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');

  // Esperar al menos 2 segundos antes de mostrar el contenido
  setTimeout(() => {
    content.hidden = false;
    preloader.classList.add('hidden');

    // Eliminar el preloader del DOM después de la transición
    preloader.addEventListener('transitionend', () => preloader.remove());
  }, 1000); // Cambia 1000 por el tiempo en milisegundos que desees
});