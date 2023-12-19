const button = document.querySelector('#menuIcon');
const nav = document.querySelector('nav');
const backdrop = document.querySelector('.backdrop');

button.addEventListener('click', () => {
  button.classList.toggle('cross'); // Bascule la classe pour la transformation

  // Utilisez setTimeout pour retarder l'ouverture du menu
  setTimeout(() => {
    nav.classList.toggle('open');
  }, 100); // 1000ms = 1 seconde
});

backdrop.addEventListener('click', () => {
  nav.classList.remove('open');
  setTimeout(() => {
    button.classList.remove('cross'); // Retarde la réversion de la croix
  }, 300); // Vous pouvez ajuster ce timing selon l'animation
});
