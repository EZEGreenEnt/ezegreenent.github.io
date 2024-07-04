window.onload = function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('nav ul');

  hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Smooth scrolling to sections
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const sectionId = this.getAttribute('href');
      const section = document.querySelector(sectionId);

      if (section) {
        // Calculate offset considering fixed header height
        const headerHeight = document.querySelector('header').offsetHeight;
        const offsetTop = section.offsetTop - headerHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Close the menu if it's open (for mobile view)
        navMenu.classList.remove('show');
      }
    });
  });
};
