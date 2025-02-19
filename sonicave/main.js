document.addEventListener("DOMContentLoaded", function () {
    const windowElement = document.getElementById("floatingWindow");
    const overlay = document.getElementById("overlay");

    // Show window & overlay on load
    windowElement.style.display = "block";
    overlay.style.display = "block";

    // Close Button
    document.querySelectorAll(".close").forEach(btn => {
        btn.addEventListener("click", () => {
            windowElement.style.display = "none";
            overlay.style.display = "none";
        });
    });

    // Minimize Button
    document.querySelectorAll(".minimize").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".window-content").style.display = "none";
        });
    });

    // Maximize Button
    document.querySelectorAll(".maximize").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".window-content").style.display = "block";
        });
    });
});