// Event Listener Initialization
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initTypingEffect();
  initScrollEvents();
  initThemeToggle();
  initSmoothScrolling();
  initAnimations();
});

// Typing Effect added
function initTypingEffect() {
  const typedText = document.getElementById("typed-text");
  const phrases = ["Hello, World!", "I'm Raunak!", "A Full-Stack Developer."];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (!typedText) return;

    const currentPhrase = phrases[phraseIndex];

    // Updating the displayed text first
    typedText.textContent = currentPhrase.substring(0, charIndex);

    // Deciding what to do next
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    let delay = isDeleting ? 60 : 100;

    // Switching to deleting mode
    if (!isDeleting && charIndex === currentPhrase.length + 1) {
      isDeleting = true;
      delay = 1100; // pausing before deletion
    }
    // Switching to the next phrase
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 200;
    }

    setTimeout(type, delay);
  }

  type();
}

// Function for smooth scrolling
function initScrollEvents() {
  const nav = document.querySelector("nav");
  const sections = document.querySelectorAll("section");
  const animatedElements = document.querySelectorAll(
    ".project-card, .hero-text"
  );

  function isInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
  }

  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 50);

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + section.offsetHeight
      ) {
        document.querySelectorAll(".nav-left a").forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${sectionId}`
          );
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
}

// Function for toggling between light mode and dark mode
function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggle.checked = true;
  }

  toggle?.addEventListener("change", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem(
      "theme",
      body.classList.contains("light-mode") ? "light" : "dark"
    );
  });
}
// Function for Smooth Scrolling between links added
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    });
  });
}


// Mobile Optimization
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    if (
      !hamburger.contains(event.target) &&
      !mobileNav.contains(event.target)
    ) {
      mobileNav.classList.remove("open");
    }
  });
}