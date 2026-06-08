// Filter Menu
const filterBtn = document.getElementById("filter");
const menu = document.querySelector(".filter-menu");

filterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
});

document.addEventListener("click", () => {
    menu.classList.remove("show");
});

menu.addEventListener("click", (e) => {
    e.stopPropagation();
});


// Elements
const chips = document.querySelectorAll(".tech-chip");
const cards = document.querySelectorAll(".project-card");
const projectContainer = document.querySelector(".project-cards");
const sortOptions = document.querySelectorAll('input[name="sort"]');


// Selected technologies
let selectedTech = [];


// Tech Filter
chips.forEach(chip => {
    chip.addEventListener("click", () => {

        chip.classList.toggle("active");

        const tech = chip.textContent.toLowerCase();

        if (chip.classList.contains("active")) {
            selectedTech.push(tech);
        } else {
            selectedTech = selectedTech.filter(item => item !== tech);
        }

        filterProjects();
    });
});


// Sort Filter
sortOptions.forEach(option => {
    option.addEventListener("change", () => {
        sortProjects(option.value);
    });
});


// Filter Function
function filterProjects() {

    cards.forEach(card => {

        const cardTech = card.dataset.tech.toLowerCase();

        if (
            selectedTech.length === 0 ||
            selectedTech.some(tech => cardTech.includes(tech))
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

}
    

// Sort Function
function sortProjects(sortType) {

    const sortedCards = [...cards];

    sortedCards.sort((a, b) => {

        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);
       

        if (sortType === "newest") {
            return dateB - dateA;
        }

        if (sortType === "oldest") {
            return dateA - dateB;
        }
         console.log(sortType);
    });

    sortedCards.forEach(card => {
        projectContainer.appendChild(card);
    });

}