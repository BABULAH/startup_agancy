const testimonials = document.querySelectorAll('.swiper-slide'); // Tous les témoignages
const images = document.querySelectorAll('.image-container .swiper-slide'); // Toutes les images
const imageLines = document.querySelectorAll('.image-line'); // Lignes mauves pour chaque image

// Initialise Swiper pour les témoignages
const testimonialSwiper = new Swiper('#testimonialsContent', {
  slidesPerView: 1, // Afficher un seul témoignage à la fois
  loop: true, // Boucle pour le témoignage
  autoplay: {
    delay: 3000, // Délai entre les slides
  },
  pagination: {
    el: '.swiper-pagination', // Pagination (si nécessaire)
    clickable: true, // Rendre la pagination cliquable
  },
  navigation: {
    nextEl: '.swiper-button-next', // Bouton suivant (si nécessaire)
    prevEl: '.swiper-button-prev', // Bouton précédent (si nécessaire)
  },
});

// Initialise Swiper pour les images
const imageSwiper = new Swiper('.image-container', {
  slidesPerView: 3, // Affiche 3 images à la fois
  loop: true, // Boucle les images
});

// Gérer le changement d'index pour les témoignages
function updateImageLine() {
  const activeIndex = testimonialSwiper.realIndex; // Récupérer l'index du témoignage actif

  // Réinitialise toutes les lignes
  imageLines.forEach((line) => {
    line.style.display = 'none'; // Cache toutes les lignes mauves
  });

  // Déterminer quels indices d'images afficher
  const displayIndices = [
    [0, 1, 2], // Pour le témoignage 1
    [1, 2, 3], // Pour le témoignage 2
    [2, 3, 4], // Pour le témoignage 3
    [3, 4, 0], // Pour le témoignage 4
    [4, 0, 1], // Pour le témoignage 5
  ][activeIndex]; // Récupérer les indices en fonction du témoignage actif

  // Affiche les images correspondantes
  displayIndices.forEach((index) => {
    images[index].style.display = 'block'; // Affiche l'image
  });

  // Affiche la ligne mauve pour l'image correspondant au témoignage actif
  const correspondingIndex = displayIndices[0]; // L'index de la première image à afficher
  imageLines[correspondingIndex].style.display = 'block'; // Affiche la ligne mauve pour l'image correspondante
}

// Écoute l'événement de changement de slide
testimonialSwiper.on('slideChange', updateImageLine);

// Initialisation de l'état initial
updateImageLine();

// Tutoriel JavaScript
const swiper = new Swiper('#tutorialsSwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


// la responsivite de la barre de navigation

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active'); // Ajoute ou supprime la classe 'active'
  });
});
