const filterBtn = document.getElementById("filter");
const menu = document.querySelector(".filter-menu");

filterBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});