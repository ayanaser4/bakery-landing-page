const navLinks = document.querySelectorAll(".nav-link ul li a");
const sections = document.querySelectorAll("section");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const navbar = document.querySelector(".home-nav");

// Highlight active link on scroll
function onScroll() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - 120 && pageYOffset < sectionTop + sectionHeight - 120) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });

  // Scroll-to-top button
  scrollToTopBtn.classList.toggle("show", window.scrollY > 300);

  // Navbar scroll style
  navbar.classList.toggle("scrolled", window.scrollY > 100);
}

// Scroll listener (debounced)
let scrollTimeout;
window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(onScroll, 100);
});

// Scroll-to-top behavior
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
