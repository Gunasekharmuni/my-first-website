const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Mobile navigation menu
menuBtn.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Demo contact form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formStatus.textContent =
        `Thank you, ${name}! This demo form works, but it is not connected to a messaging service yet.`;

    contactForm.reset();
});