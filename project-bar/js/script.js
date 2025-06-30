/**
 * Lógica de ocultar el preload
 */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');

  setTimeout(() => {
    preloader.classList.add('hidden');

    preloader.addEventListener('transitionend', function handler() {
      preloader.remove();
      content.hidden = false;
      preloader.removeEventListener('transitionend', handler);
    });
  }, 500); // sincroniza con la animación
});






/**
 * Carrusel
 */ 

const slides = document.querySelectorAll('.carousel-slide');
const effects = ['fade', 'zoom', 'rotate'];
let currentSlide = 0;

function applyRandomEffect(slide) {
  slide.classList.remove('fade', 'zoom', 'rotate');
  const effect = effects[Math.floor(Math.random() * effects.length)];
  slide.classList.add(effect);
}

setInterval(() => {
  slides[currentSlide].classList.remove('active', 'fade', 'zoom', 'rotate');

  currentSlide = (currentSlide + 1) % slides.length;

  applyRandomEffect(slides[currentSlide]);
  slides[currentSlide].classList.add('active');
}, 3000);