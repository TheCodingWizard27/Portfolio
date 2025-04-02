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