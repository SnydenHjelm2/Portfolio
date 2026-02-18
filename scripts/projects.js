function displayProjects() {
    let projectsDiv =  document.querySelector("#projects");
    for (let project of allProjects) {
        let div = document.createElement("div");
        div.classList.add("project");
        div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="languages"></div>
        <a href="${project.link}">Visit project →</a>
        `
        projectsDiv.appendChild(div);
    }

    let allLanguageDivs = document.querySelectorAll(".languages");
    for (i=0; i<allLanguageDivs.length; i++) {
        if (allProjects[i].languages.length === 0) {
            let div = document.createElement("div");
            div.classList.add("language");
            div.classList.add("tbd");
            div.textContent = "TBD";
            allLanguageDivs[i].appendChild(div);
        } else {
            for (let language of allProjects[i].languages) {
                let div = document.createElement("div");
                div.classList.add("language");
                div.classList.add(language.toLowerCase());
                div.textContent = language;
                allLanguageDivs[i].appendChild(div);                
            }                
        }
    }
}

displayProjects();
const allProjectDivs = document.querySelectorAll(".project");
allProjectDivs.forEach((x) => {
    randomGreenishColor(x);
});