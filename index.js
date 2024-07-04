window.onload = function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('nav ul');
  const sections = document.querySelectorAll('main section');

  // Toggle the navigation menu when the hamburger icon is clicked
  hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Smooth scrolling to sections when menu items are clicked
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const sectionId = this.getAttribute('href');
      const section = document.querySelector(sectionId);

      if (section) {
        // Calculate offset considering fixed header height
        const headerHeight = document.querySelector('header').offsetHeight;
        const offsetTop = section.offsetTop - headerHeight + 1; // Adjusted by +1 to ensure it scrolls correctly

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Close the menu if it's open (for mobile view)
        navMenu.classList.remove('show');

        // Hide all sections
        sections.forEach(sec => {
          sec.style.display = 'none';
          sec.style.paddingTop = '0'; // Reset padding on all sections
        });

        // Show the clicked section
        section.style.display = 'block';
        section.style.paddingTop = headerHeight + 'px'; // Add padding for fixed header
      }
    });
  });

  // Adjust scroll position on page load if there's a hash in URL
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const section = document.getElementById(hash);

    if (section) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const offsetTop = section.offsetTop - headerHeight + 1;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      // Show the clicked section
      section.style.display = 'block';
      section.style.paddingTop = headerHeight + 'px'; // Add padding for fixed header
    }
  }
};
