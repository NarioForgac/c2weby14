let table = document.createElement("table");
for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
        let cell = document.createElement("td");
        cell.textContent = "Řádek " + (i + 1);
        row.appendChild(cell);
    }

    table.appendChild(row);
}
table.classList.add("tabulka")
document.body.appendChild(table);
