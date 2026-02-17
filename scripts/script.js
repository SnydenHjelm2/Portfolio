const current = document.querySelector("#current");
const education = [
    {
        name: "Web-based Design and Development - Bachelors Program",
        location: "Malmö University - Malmö, Sweden",
        time: "September 2024 - current",
        note: "Full time, expected graduation summer 2027"
    },
    {
        name: "The Electrical and Energy Programme, specialising in Computer and Communication Technology",
        location: "NTI Gymnasiet Malmö - Malmö, Sweden",
        time: "August 2018 - June 2021",
        note: "Chose the Web-based in program path"
    }
];
const featured = document.querySelectorAll(".home-project");
const featuredProjects = [
    {
        title: "SnGeo - Geography Game", 
        desc: "Geography trivia game using an external geography api. Currently unfinished, but population and curreny games work!",
        languages: ["HTML", "CSS", "JS"],
        link: "projects/sngeo/index.html"
    },
    {
        title: "2025-26 NFL Season",
        desc: "A website containing information about the 2025-26 NFL Season. Includes information about games, statistics, standings and the full 2025 NFL Draft.",
        languages: ["HTML", "CSS", "JS"],
        link: "#"
    },
    {
        title: "JavaScript Roulette",
        desc: "A simple but fun project where you can play roulette through JavaScript! Of course made with fake money.",
        languages: ["HTML", "CSS", "JS"],
        link: "projects/js-roulette/index.html"
    }
];
const footer = document.querySelector("footer");
const footerLinks = document.querySelectorAll("footer #right a");
const jobs = [
    {
        employer: "PostNord Sverige",
        location: "Package Terminal - Toftanäs, Malmö, Sweden",
        time: "September 2021 - current",
        note: "Still employed, on study leave since september 2024"
    }
];
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

function showFeaturedProjects() {
    for (i=0; i<featured.length; i++) {
        featured[i].innerHTML = `
        <h3>${featuredProjects[i].title}</h3>
        <p>${featuredProjects[i].desc}</p>
        <div class="project-languages"></div>
        `
    }

    let projectLangDiv = document.querySelectorAll(".project-languages");
    for (i=0; i<projectLangDiv.length; i++) {
        for (j=0; j<=featuredProjects[i].languages.length; j++) {
            if (j === featuredProjects[i].languages.length) {
                let div = document.createElement("div");
                div.classList.add("project-link");
                div.innerHTML = `<a href="${featuredProjects[i].link}">Visit Project →</a>`;
                projectLangDiv[i].appendChild(div);
                break;
            }

            let div = document.createElement("div");
            div.classList.add("language");
            div.classList.add(featuredProjects[i].languages[j].toLowerCase());
            div.textContent = featuredProjects[i].languages[j];
            projectLangDiv[i].appendChild(div);
        }
    }
}

randomGreenishColor(current);
randomGreenishColor(footer);
featured.forEach((x) => {
    randomGreenishColor(x);
});
showFeaturedProjects();

footerLinks.forEach((x) => {
    if (x.textContent === current.textContent) {
        x.style.textDecoration = "underline";
    }
});