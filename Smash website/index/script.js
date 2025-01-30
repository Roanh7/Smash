document.addEventListener("DOMContentLoaded", function() {
    // 1) Loading screen verbergen
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 500);
    }, 1200); 
    // Bv. 1.2s loading. Pas aan naar wens.

    // 2) Smash-ball animatie
    let ball = document.querySelector(".smash-ball");
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = 3;
    let dy = 3;
    function moveBall() {
      x += dx; y += dy;
      if (x + 100 > window.innerWidth || x < 0) { dx = -dx; }
      if (y + 100 > window.innerHeight || y < 0) { dy = -dy; }
      ball.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(moveBall);
    }
    moveBall();

    // 3) Scroll-hide navbar
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", function() {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            navbar.classList.add("hidden");
            navToggle.classList.add("visible");
        } else {
            navbar.classList.remove("hidden");
            navToggle.classList.remove("visible");
        }
        lastScrollY = window.scrollY;
    });
    navToggle.addEventListener("click", function() {
        navbar.classList.toggle("open");
    });
});