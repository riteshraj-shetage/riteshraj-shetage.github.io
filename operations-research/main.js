function generateTable() {
    const numVars = parseInt(document.getElementById('numVars').value);
    const numConstraints = parseInt(document.getElementById('numConstraints').value);
    const problemType = document.getElementById('problemType').value;

    let tableHTML = '<table>';
    tableHTML += '<tr><th rowspan="2">CB</th><th rowspan="2">B</th><th rowspan="2">XB</th>';
    for (let i = 1; i <= numVars; i++) tableHTML += `<th>X${i}</th>`;
    for (let i = 1; i <= numConstraints; i++) tableHTML += `<th>S${i}</th>`;
    tableHTML += '<th rowspan="2">RHS</th><th rowspan="2">Min Ratio</th></tr>';
    tableHTML += '<tr>';
    for (let i = 1; i <= numVars; i++) tableHTML += `<th id="ci_x${i}">0</th>`;
    for (let i = 1; i <= numConstraints; i++) tableHTML += `<th id="ci_s${i}">0</th>`;
    tableHTML += '</tr>';

    for (let i = 1; i <= numConstraints; i++) {
        tableHTML += `<tr><td id="cb_s${i}">0</td><td>S${i}</td><td><input type="number" id="xb${i}" value="0" readonly></td>`;
        for (let j = 1; j <= numVars; j++) {
            tableHTML += `<td><input type="number" id="c${i}v${j}" required></td>`;
        }
        for (let j = 1; j <= numConstraints; j++) {
            tableHTML += `<td>${i === j ? 1 : 0}</td>`;
        }
        tableHTML += `<td><input type="number" id="c${i}rhs" required></td><td id="min_ratio${i}">-</td></tr>`;
    }

    tableHTML += '<tr><td>-</td><td>Z</td><td>-</td>';
    for (let j = 1; j <= numVars; j++) {
        tableHTML += `<td id="z_x${j}">0</td>`;
    }
    for (let j = 1; j <= numConstraints; j++) {
        tableHTML += `<td id="z_s${j}">0</td>`;
    }
    tableHTML += '<td>-</td><td>-</td></tr>';

    tableHTML += '<tr><td>-</td><td>Zj</td><td>-</td>';
    for (let j = 1; j <= numVars; j++) {
        tableHTML += `<td id="zj_x${j}">0</td>`;
    }
    for (let j = 1; j <= numConstraints; j++) {
        tableHTML += `<td id="zj_s${j}">0</td>`;
    }
    tableHTML += '<td>-</td><td>-</td></tr>';

    tableHTML += '<tr><td>-</td><td>Ci - Zj</td><td>-</td>';
    for (let j = 1; j <= numVars; j++) {
        tableHTML += `<td id="ci_zj_x${j}">0</td>`;
    }
    for (let j = 1; j <= numConstraints; j++) {
        tableHTML += `<td id="ci_zj_s${j}">0</td>`;
    }
    tableHTML += '<td>-</td><td>-</td></tr>';

    tableHTML += '</table>';

    document.getElementById('inputTable').innerHTML = tableHTML;
    document.getElementById('simplexForm').classList.remove('hidden');
}

function solveSimplex() {
    const numVars = parseInt(document.getElementById('numVars').value);
    const numConstraints = parseInt(document.getElementById('numConstraints').value);
    const problemType = document.getElementById('problemType').value;

    let tableau = [];
    for (let i = 1; i <= numConstraints; i++) {
        let row = [];
        for (let j = 1; j <= numVars; j++) {
            row.push(new Fraction(document.getElementById(`c${i}v${j}`).value || 0));
        }
        for (let j = 1; j <= numConstraints; j++) {
            row.push(new Fraction(i === j ? 1 : 0)); // Slack variables
        }
        row.push(new Fraction(document.getElementById(`c${i}rhs`).value || 0));
        tableau.push(row);
    }

    let objFunc = [];
    for (let j = 1; j <= numVars; j++) {
        objFunc.push(new Fraction(document.getElementById(`ci_x${j}`).textContent || 0));
    }
    for (let j = 1; j <= numConstraints; j++) {
        objFunc.push(new Fraction(0)); // Coefficients for slack variables
    }
    objFunc.push(new Fraction(0)); // RHS

    tableau.push(objFunc); // Adding the objective function row

    let stepsHTML = `<h3>Initial Tableau</h3>${generateTableHTML(tableau)}`;
    let iteration = 1;

    while (!isOptimal(tableau, problemType)) {
        let pivotCol = selectPivotColumn(tableau, problemType);
        let pivotRow = selectPivotRow(tableau, pivotCol);
        if (pivotRow === -1) break; // No valid pivot row found, unbounded solution

        stepsHTML += `<h3>Iteration ${iteration}</h3>`;
        stepsHTML += `<p>Pivot Element: Row ${pivotRow + 1}, Column ${pivotCol + 1}</p>`;

        tableau = performPivotOperation(tableau, pivotRow, pivotCol);
        stepsHTML += generateTableHTML(tableau);
        iteration++;
    }

    stepsHTML += `<h3>Final Solution</h3>${getSolution(tableau, numVars)}`;
    document.getElementById('steps').innerHTML = stepsHTML;
    document.getElementById('solution').classList.remove('hidden');
}

function generateTableHTML(tableau) {
    let html = "<table>";
    tableau.forEach(row => {
        html += "<tr>";
        row.forEach(cell => {
            html += `<td>${cell.toFraction()}</td>`;
        });
        html += "</tr>";
    });
    html += "</table>";
    return html;
}

function isOptimal(tableau, problemType) {
    let lastRow = tableau[tableau.length - 1];
    if (problemType === "max") {
        return lastRow.slice(0, -1).every(cell => cell.valueOf() >= 0);
    } else {
        return lastRow.slice(0, -1).every(cell => cell.valueOf() <= 0);
    }
}

function selectPivotColumn(tableau, problemType) {
    let lastRow = tableau[tableau.length - 1];
    let values = lastRow.slice(0, -1).map(cell => cell.valueOf());
    return problemType === "max" ? values.indexOf(Math.min(...values)) : values.indexOf(Math.max(...values));
}

function selectPivotRow(tableau, pivotCol) {
    let minRatio = Infinity, minIndex = -1;
    for (let i = 0; i < tableau.length - 1; i++) {
        let rhs = tableau[i][tableau[i].length - 1];
        let colVal = tableau[i][pivotCol];
        if (colVal.valueOf() > 0) {
            let ratio = rhs.div(colVal);
            if (ratio.valueOf() < minRatio) {
                minRatio = ratio.valueOf();
                minIndex = i;
            }
        }
    }
    return minIndex;
}

function performPivotOperation(tableau, pivotRow, pivotCol) {
    let pivotElement = tableau[pivotRow][pivotCol];

    // Divide the pivot row by the pivot element
    tableau[pivotRow] = tableau[pivotRow].map(cell => cell.div(pivotElement));

    // Make other rows zero in the pivot column
    for (let i = 0; i < tableau.length; i++) {
        if (i !== pivotRow) {
            let factor = tableau[i][pivotCol];
            tableau[i] = tableau[i].map((cell, index) => cell.sub(factor.mul(tableau[pivotRow][index])));
        }
    }

    return tableau;
}

function getSolution(tableau, numVars) {
    let solution = "Optimal Solution: ";
    let lastColIndex = tableau[0].length - 1;
    let vars = Array(numVars).fill(new Fraction(0));

    for (let i = 0; i < tableau.length - 1; i++) {
        let basicVarIndex = tableau[i].slice(0, numVars).findIndex(cell => cell.equals(1));
        if (basicVarIndex !== -1 && tableau[i].filter(cell => !cell.equals(0) && !cell.equals(1)).length === 1) {
            vars[basicVarIndex] = tableau[i][lastColIndex];
        }
    }

    vars.forEach((val, i) => {
        solution += `x${i + 1} = ${val.toFraction()}, `;
    });

    solution += `Z = ${tableau[tableau.length - 1][lastColIndex].toFraction()}`;
    return solution;
}