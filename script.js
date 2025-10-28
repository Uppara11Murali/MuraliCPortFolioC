// ======== Navbar Toggle (for mobile) ========
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Toggle navbar visibility on small screens
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// ======== Close Navbar When Clicking a Link (Mobile) ========
const navLinks = document.querySelectorAll("#navbar ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// ======== Sticky Header on Scroll ========
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ======== Smooth Scroll Behavior ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: "smooth"
        });
      }
    }
  });
});

// ======== Active Link Highlight on Scroll ========
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const id = section.getAttribute("id");
    const link = document.querySelector(`nav ul li a[href="#${id}"]`);

    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      link?.classList.add("active");
    } else {
      link?.classList.remove("active");
    }
  });
});

// ======== Contact Form Submission (optional alert) ========

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`✅ Thank you, ${name}! Your message has been sent.`);
    event.target.reset();
  } else {
    alert("⚠️ Please fill out all fields before submitting.");
  }
}
