/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   2 November 2021
 * License:   Public Domain
 */

let outputEl = document.getElementById('output');

let new1El = document.createElement('p');
new1El.innerHTML = "El1: Something new!";

let new2El = document.createElement('p');
new2El.innerHTML = "El2: Something else!";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Put a new element above the other elements
let new3El = document.createElement('p');
new3El.innerHTML = "El3: Rise to the top.";
outputEl.prepend(new3El);

// Experiment with DOM documents
let new4El = document.createElement('p');
new4El.innerHTML = `El4: ${document.domain}`;
outputEl.appendChild(new4El);