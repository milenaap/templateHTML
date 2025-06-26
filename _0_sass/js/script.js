window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content   = document.getElementById('content');

  // mostrar contenido
  content.hidden = false;

  // iniciar desvanecimiento
  preloader.classList.add('hidden');

  // opcional: retirar el nodo del DOM cuando termine la transición
  preloader.addEventListener('transitionend', () => preloader.remove());
});