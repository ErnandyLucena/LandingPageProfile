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

var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
   timer = setTimeout(function() {
    var evt;
    if (document.createEvent){
      //If browser = IE, then polyfill
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
      //If Browser = modern, then create new MouseEvent
      evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
    }
    var ele = "." + testimonialItems[index].className;
    var ele2 = document.querySelector(ele)
    ele2.dispatchEvent(evt);
    index++; // Increment the index
    if (index >= testimonialItems.length) {
      index = 0; // Set it back to `0` when it reaches `3`
    }
    cycleTestimonials(index); // recursively call `cycleTestimonials()`
    document.querySelector(".testimonials").addEventListener("click", function() {
      clearTimeout(timer); //stop the carousel when someone clicks on the div
    });
  }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);


// Função para abrir o modal e preencher com os dados
function openModal(title, description, repositoryUrl) {
  // Preenche os dados no modal
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;

  const repoButton = document.getElementById('repositoryButton');
  if (repoButton) {
    repoButton.href = repositoryUrl; // Define a URL
    repoButton.target = "_blank"; // Abre em uma nova aba
  }
  

  // Exibe o modal
  document.getElementById('projectModal').style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
  // Esconde o modal
  document.getElementById('projectModal').style.display = 'none';
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
  if (event.target == document.getElementById('projectModal')) {
    closeModal();
  }
}

// Inicialização - Garanta que o modal esteja oculto ao carregar a página
window.onload = function() {
  document.getElementById('projectModal').style.display = 'none';
};


// botao fixo 

document.getElementById('scrollToHomeBtn').addEventListener('click', () => {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

