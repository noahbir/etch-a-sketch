function createGrid(n) {
    const container = document.querySelector(".grid-container")
    for(let i = 0; i < n; ++i) {
        const column = document.createElement("div");
        column.classList.add("grid-column");
        container.appendChild(column);
        for(let j = 0; j < n; ++j) {
            const row = document.createElement("div");
            row.classList.add("grid-row");
            column.appendChild(row);
        }
    }
}

const button = document.getElementById("save-button");
button.addEventListener("click", () => {
    var userInput = document.getElementById("user-input").value;
    console.log("User input: " + userInput);
    createGrid(userInput);
    const divs = document.querySelectorAll(".grid-row");

    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "purple";
        });
    });
});