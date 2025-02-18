document.addEventListener("DOMContentLoaded", function () {
    generateTable(); // Auto-generate table on page load
});

function generateTable() {
    let numVars = document.getElementById("numVars").value;
    let numConstraints = document.getElementById("numConstraints").value;

    let tableHTML = `<table><tr><th>Variables</th>`;
    
    // Table Headers
    for (let i = 1; i <= numVars; i++) {
        tableHTML += `<th>x${i}</th>`;
    }
    tableHTML += `<th>≤</th><th>RHS</th></tr>`;

    // Constraint Rows
    for (let i = 1; i <= numConstraints; i++) {
        tableHTML += `<tr><td>Constraint ${i}</td>`;
        for (let j = 0; j <= numVars; j++) {
            tableHTML += `<td><input type="number" id="c${i}_v${j}" value="0"></td>`;
        }
        tableHTML += `</tr>`;
    }

    // Objective Function
    tableHTML += `<tr><td>Objective Function</td>`;
    for (let j = 1; j <= numVars; j++) {
        tableHTML += `<td><input type="number" id="obj_v${j}" value="0"></td>`;
    }
    tableHTML += `<td>Max</td></tr></table>`;

    document.getElementById("inputTable").innerHTML = tableHTML;
    document.getElementById("solveBtn").style.display = "block";
}

function solveSimplex() {
    let numVars = document.getElementById("numVars").value;
    let numConstraints = document.getElementById("numConstraints").value;

    let constraints = [];
    for (let i = 1; i <= numConstraints; i++) {
        let row = [];
        for (let j = 0; j <= numVars; j++) {
            row.push(parseFloat(document.getElementById(`c${i}_v${j}`).value));
        }
        constraints.push(row);
    }

    let objective = [];
    for (let j = 1; j <= numVars; j++) {
        objective.push(parseFloat(document.getElementById(`obj_v${j}`).value));
    }

    // Placeholder for stepwise solution
    let steps = `<p>Solving Simplex for ${numVars} variables and ${numConstraints} constraints...</p>`;
    steps += `<p>(Stepwise solution will be implemented here)</p>`;

    document.getElementById("solution").style.display = "block";
    document.getElementById("steps").innerHTML = steps;
}