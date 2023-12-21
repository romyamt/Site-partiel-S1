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


document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.querySelector('.contact-button');
  const socialLinks = document.querySelector('.social-links');
  const contactHideSection = document.querySelector('#contact-hide-section');

  const observerOptions = {
    root: null, // par défaut le viewport
    rootMargin: '0px',
    threshold: 0, // Se déclenche dès que l'élément entre dans le viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactButton.style.display = 'none';
        socialLinks.style.display = 'none';
      } else {
        contactButton.style.display = 'flex';
        socialLinks.style.display = 'flex';
      }
    });
  }, observerOptions);

  observer.observe(contactHideSection);
});


document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('#services');
  const nav = document.querySelector('nav');
  const serviceLink = document.querySelector('nav ul li a[href="#services"]'); // Sélectionne le lien "Services"

  // Bascule la classe pour la transformation du menu burger et l'ouverture/fermeture du menu
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuIcon.classList.toggle('cross');
  });

  // Fermer le menu lorsque vous cliquez sur le lien "Services"
  if (serviceLink) {
    serviceLink.addEventListener('click', () => {
      nav.classList.remove('open');
      menuIcon.classList.remove('cross');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('#realisations');
  const nav = document.querySelector('nav');
  const serviceLink = document.querySelector('nav ul li a[href="#realisations"]'); // Sélectionne le lien "Services"

  // Bascule la classe pour la transformation du menu burger et l'ouverture/fermeture du menu
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuIcon.classList.toggle('cross');
  });

  // Fermer le menu lorsque vous cliquez sur le lien "Services"
  if (serviceLink) {
    serviceLink.addEventListener('click', () => {
      nav.classList.remove('open');
      menuIcon.classList.remove('cross');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('#quisommesnous');
  const nav = document.querySelector('nav');
  const serviceLink = document.querySelector('nav ul li a[href="#quisommesnous"]'); // Sélectionne le lien "Services"

  // Bascule la classe pour la transformation du menu burger et l'ouverture/fermeture du menu
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuIcon.classList.toggle('cross');
  });

  // Fermer le menu lorsque vous cliquez sur le lien "Services"
  if (serviceLink) {
    serviceLink.addEventListener('click', () => {
      nav.classList.remove('open');
      menuIcon.classList.remove('cross');
    });
  }
});


