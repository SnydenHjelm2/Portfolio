const current = document.querySelector("#current");
const featured = document.querySelectorAll(".home-project");
const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach((x) => {
    x.addEventListener("mouseenter", () => {
        randomGreenishColor(x);
    });
});

navLinks.forEach((x) => {
    x.addEventListener("mouseleave", () => {
        if (x.id === "current") {
            randomGreenishColor(x, x.style.backgroundColor);
        } else {
            x.style.backgroundColor = "";
        }
    });
});

function randomGreenishColor(element, color = null) {
    if (!color) {
        let r = Math.floor(Math.random() * 150);
        let b = Math.floor(Math.random() * 150);
        element.style.backgroundColor = `rgb(${r}, 255, ${b})`;
    } else {
        element.style.backgroundColor = color;
    }
};

randomGreenishColor(current);
featured.forEach((x) => {
    randomGreenishColor(x);
});