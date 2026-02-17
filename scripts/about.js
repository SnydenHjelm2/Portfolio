education.forEach((x) => {
    let div = document.createElement("div");
    div.classList.add("education");
    div.innerHTML = `
    <h3>${x.name}</h3>
    <p><span class="bold">Location:</span> ${x.location}</p>
    <p><span class="bold">Time:</span> ${x.time}</p>
    <p><span class="bold">Note:</span> ${x.note}</p>
    `;
    document.querySelector("#education").appendChild(div);
});

jobs.forEach((x) => {
    let div = document.createElement("div");
    div.classList.add("job");
    div.innerHTML = `
    <h3>${x.employer}</h3>
    <p><span class="bold">Location:</span> ${x.location}</p>
    <p><span class="bold">Time:</span> ${x.time}</p>
    <p><span class="bold">Note:</span> ${x.note}</p>
    `;
    document.querySelector("#work").appendChild(div);
});

const edu = document.querySelectorAll(".education");
const job = document.querySelectorAll(".job");

edu.forEach((x) => {
    randomGreenishColor(x);
});

job.forEach((x) => {
    randomGreenishColor(x);
});