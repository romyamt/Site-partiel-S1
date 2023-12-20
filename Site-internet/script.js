const button = document.querySelector('#menuIcon');
const nav = document.querySelector('nav');
const backdrop = document.querySelector('.backdrop');
const body = document.body; // Récupère l'élément body

button.addEventListener('click', () => {
  button.classList.toggle('cross'); // Bascule la classe pour la transformation

  // Utilisez setTimeout pour retarder l'ouverture du menu
  setTimeout(() => {
    nav.classList.toggle('open');
    body.classList.toggle('no-scroll'); // Bascule la classe no-scroll sur body pour désactiver le défilement
  }, 100); // 1000ms = 1 seconde
});

backdrop.addEventListener('click', () => {
  nav.classList.remove('open');
  setTimeout(() => {
    button.classList.remove('cross'); // Retarde la réversion de la croix
    body.classList.remove('no-scroll'); // Réactive le défilement
  }, 300); // Vous pouvez ajuster ce timing selon l'animation
});

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("header-scrolled", window.scrollY > 0);
});

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var sectionOrange = document.querySelector(".section_orange"); // Remplacez par la classe/id de votre section orange
  var positionSectionOrange = sectionOrange.offsetTop; // Obtient la position de la section orange

  // Vérifie si le header a dépassé la section orange
  if (window.scrollY >= positionSectionOrange) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
