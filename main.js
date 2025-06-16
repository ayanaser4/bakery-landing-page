const navLinks = document.querySelectorAll(".nav-link ul a");
  const sections = document.querySelectorAll("section");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  function onScroll() {
    let currentSection = "";

    for (const section of sections) {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= 100 && sectionTop + section.offsetHeight > 100) {
        currentSection = section.id;
        break;
      }
    }

    for (const link of navLinks) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    }

    // Show/hide scroll-to-top button
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  }

  // Optional: debounce for performance (especially on mobile)
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(onScroll, 100);
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });