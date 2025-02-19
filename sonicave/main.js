// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
let isDarkMode = true;

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    isDarkMode = !isDarkMode;
    darkModeToggle.innerText = isDarkMode ? "🌙" : "☀️";
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Project & Blog Card Hover Effects
document.querySelectorAll(".project-card, .blog-post").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});