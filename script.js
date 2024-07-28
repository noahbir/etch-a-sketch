function createGrid() {
    const container = document.querySelector(".grid-container")
    for(let i = 0; i < 16; ++i) {
        const column = document.createElement("div");
        column.classList.add("grid-column");
        container.appendChild(column);
        for(let j = 0; j < 16; ++j) {
            const row = document.createElement("div");
            row.classList.add("grid-row");
            column.appendChild(row);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
    const divs = document.querySelectorAll(".grid-row");

    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "purple";
        });
    });
});
