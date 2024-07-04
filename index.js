// index.js

// Toggle the navigation menu when the hamburger icon is clicked
window.onload = function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('nav ul');

  hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
};

