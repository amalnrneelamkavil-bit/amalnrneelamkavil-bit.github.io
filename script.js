// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Rotating text in the hero section
const phrases = ["electronics & IoT", "embedded systems", "smart technology", "hardware + software"];
const typedText = document.getElementById("typedText");
let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typePhrase() {
  if (!typedText) return;
  const current = phrases[phraseIndex];
  typedText.textContent = current.substring(0, characterIndex);
  if (!deleting && characterIndex < current.length) {
    characterIndex++;
    setTimeout(typePhrase, 85);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typePhrase, 1250);
  } else if (characterIndex > 0) {
    characterIndex--;
    setTimeout(typePhrase, 42);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typePhrase, 250);
  }
}
if (typedText) setTimeout(typePhrase, 500);

// Current year in footer
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
