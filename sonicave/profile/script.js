document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".window").style.display = "none";
    });
});

document.querySelectorAll(".minimize").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".window-content").style.display = "none";
    });
});

document.querySelectorAll(".maximize").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".window-content").style.display = "block";
    });
});