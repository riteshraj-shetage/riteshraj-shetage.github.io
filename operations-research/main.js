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
    let numVars = parseInt(document.getElementById("numVars").value);
    let numConstraints = parseInt(document.getElementById("numConstraints").value);

    let tableau = [];

    // Construct initial tableau
    for (let i = 0; i < numConstraints; i++) {
        let row = [];
        for (let j = 0; j <= numVars; j++) {
            row.push(parseFloat(document.getElementById(`c${i + 1}_v${j}`).value));
        }
        for (let j = 0; j < numConstraints; j++) {
            row.push(i === j ? 1 : 0); // Slack variables
        }
        tableau.push(row);
    }

    // Objective function row
    let objRow = [];
    for (let j = 0; j < numVars; j++) {
        objRow.push(-parseFloat(document.getElementById(`obj_v${j + 1}`).value));
    }
    for (let j = 0; j < numConstraints + 1; j++) {
        objRow.push(0);
    }
    tableau.push(objRow);

    let stepsHTML = `<h3>Initial Tableau</h3>`;
    stepsHTML += generateTableauHTML(tableau);

    // Perform Simplex iterations
    let iteration = 1;
    while (!isOptimal(tableau)) {
        let pivotCol = getPivotColumn(tableau);
        let pivotRow = getPivotRow(tableau, pivotCol);

        if (pivotRow === -1) {
            stepsHTML += `<p>No feasible solution (Unbounded problem)</p>`;
            break;
        }

        stepsHTML += `<h3>Iteration ${iteration}</h3>`;
        stepsHTML += `<p>Pivot Element: Row ${pivotRow + 1}, Column ${pivotCol + 1}</p>`;

        tableau = performPivotOperation(tableau, pivotRow, pivotCol);
        stepsHTML += generateTableauHTML(tableau);
        iteration++;
    }

    // Display final result
    let solution = getSolution(tableau, numVars);
    stepsHTML += `<h3>Final Solution</h3><p>${solution}</p>`;

    document.getElementById("solution").style.display = "block";
    document.getElementById("steps").innerHTML = stepsHTML;
}

// Helper function to generate HTML for the tableau
function generateTableauHTML(tableau) {
    let tableHTML = `<table>`;
    for (let i = 0; i < tableau.length; i++) {
        tableHTML += `<tr>`;
        for (let j = 0; j < tableau[i].length; j++) {
            tableHTML += `<td>${tableau[i][j].toFixed(2)}</td>`;
        }
        tableHTML += `</tr>`;
    }
    tableHTML += `</table>`;
    return tableHTML;
}

// Check if the current tableau is optimal
function isOptimal(tableau) {
    let lastRow = tableau[tableau.length - 1];
    return lastRow.every(value => value >= 0);
}

// Get the pivot column (most negative value in last row)
function getPivotColumn(tableau) {
    let lastRow = tableau[tableau.length - 1];
    let minValue = Math.min(...lastRow.slice(0, lastRow.length - 1));
    return lastRow.indexOf(minValue);
}

// Get the pivot row (minimum positive ratio of RHS to pivot column)
function getPivotRow(tableau, pivotCol) {
    let ratios = [];
    for (let i = 0; i < tableau.length - 1; i++) {
        let rhs = tableau[i][tableau[i].length - 1];
        let pivotValue = tableau[i][pivotCol];
        if (pivotValue > 0) {
            ratios.push(rhs / pivotValue);
        } else {
            ratios.push(Infinity);
        }
    }
    let minRatio = Math.min(...ratios);
    return ratios.indexOf(minRatio);
}

// Perform pivot operation (row reduction)
function performPivotOperation(tableau, pivotRow, pivotCol) {
    let pivotValue = tableau[pivotRow][pivotCol];

    // Normalize pivot row
    for (let j = 0; j < tableau[pivotRow].length; j++) {
        tableau[pivotRow][j] /= pivotValue;
    }

    // Reduce other rows
    for (let i = 0; i < tableau.length; i++) {
        if (i !== pivotRow) {
            let factor = tableau[i][pivotCol];
            for (let j = 0; j < tableau[i].length; j++) {
                tableau[i][j] -= factor * tableau[pivotRow][j];
            }
        }
    }

    return tableau;
}

// Get final solution from tableau
function getSolution(tableau, numVars) {
    let solution = new Array(numVars).fill(0);

    for (let i = 0; i < tableau.length - 1; i++) {
        let basicVarIndex = tableau[i].slice(0, numVars).findIndex(x => x === 1);
        if (basicVarIndex !== -1) {
            solution[basicVarIndex] = tableau[i][tableau[i].length - 1];
        }
    }

    return `Optimal Solution: ${solution.map((val, i) => `x${i + 1} = ${val.toFixed(2)}`).join(", ")}`;
}