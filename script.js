// === Mobile Navbar Toggle ===
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Close menu when clicking a link
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuToggle.classList.remove('open');
  });
});

// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// === Contact Form (Send Email using EmailJS) ===
// Step 1: Go to https://www.emailjs.com/
// Step 2: Create an account → Add a new Email Service (Gmail)
// Step 3: Create an Email Template (with name, email, message fields)
// Step 4: Copy your Service ID, Template ID, and Public Key
// Step 5: Replace the placeholders below 👇

function sendMessage(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill all fields before submitting.");
    return;
  }

  // Your EmailJS credentials
  const serviceID = "service_uqbzxiy"; // e.g., service_xxxxxxx
  const templateID = "template_gttdqhq"; // e.g., template_yyyyyyy
  const publicKey = "8kiNKDRfW4jqK-202"; // e.g., sXyzAbC12345

  // Initialize EmailJS
  emailjs.init(publicKey);

  // Send email
  emailjs.send(serviceID, templateID, {
    name: name,
    email: email,
    message: message,
  })
  .then(() => {
    alert("✅ Message sent successfully! I’ll get back to you soon.");
    document.querySelector(".contact-form").reset();
  })
  .catch((error) => {
    console.error("Email send error:", error);
    alert("❌ Oops! Something went wrong. Please try again later.");
  });
}
