// index.js

// Get the navigation menu and the hamburger icon
const navMenu = document.querySelector('nav ul');
const hamburgerIcon = document.querySelector('.hamburger-icon');

// Toggle the navigation menu when the hamburger icon is clicked
hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
