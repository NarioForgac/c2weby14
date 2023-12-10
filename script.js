function randomNum(max) {
    return Math.floor(Math.random() * max);
}

let listofNames = ["okeey", "Some name", "Name", "no idea", "JavaScript", "Html", "CSS", "OK", "K"]

let table = document.createElement("table");
for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    row.classList.add("hover")
    for (let j = 0; j < 3; j++) {
        let cell = document.createElement("td");
        cell.textContent = listofNames[randomNum(9)];
        row.appendChild(cell);
    }

    table.appendChild(row);
}
table.classList.add("tabulka")
document.body.appendChild(table);

