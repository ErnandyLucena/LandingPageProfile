// script.js
const menuToggle = document.getElementById("menu-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

menuToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
});


const slides = document.querySelector('.carousel__slides');
const slideCount = document.querySelectorAll('.carousel__slide').length;
const prevButton = document.querySelector('.carousel__btn.prev');
const nextButton = document.querySelector('.carousel__btn.next');

let currentIndex = 0;
let intervalId;

// Função para atualizar o slide
function updateSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Função para ir ao próximo slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlide(currentIndex);
}

// Função para ir ao slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlide(currentIndex);
}

// Eventos dos botões
nextButton.addEventListener('click', () => {
  clearInterval(intervalId);
  nextSlide();
  startAutoSlide();
});

prevButton.addEventListener('click', () => {
  clearInterval(intervalId);
  prevSlide();
  startAutoSlide();
});

// Função para iniciar o deslizamento automático
function startAutoSlide() {
  intervalId = setInterval(nextSlide, 5000);
}

// Iniciar deslizamento automático
startAutoSlide();

