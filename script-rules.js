// 1) IntersectionObserver voor .rules-box
document.addEventListener("DOMContentLoaded", function() {
    const rules = document.querySelectorAll(".rules-box");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    rules.forEach((rule) => observer.observe(rule));
  });
  
  // 2) Scroll-hide navbar + floating nav
  document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", function() {
      // Als we naar beneden scrollen (en voorbij 100px)
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.classList.add("hidden");
        navToggle.classList.add("visible");
      } else {
        // Scrollen omhoog
        navbar.classList.remove("hidden");
        navToggle.classList.remove("visible");
      }
      lastScrollY = window.scrollY;
    });
  
    // Klik op ronde nav-knop => toggle .open voor popup
    navToggle.addEventListener("click", function() {
      navbar.classList.toggle("open");
    });
  });