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