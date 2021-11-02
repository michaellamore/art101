/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   4 November 2021
 * License:   Public Domain
 */

let radioNormal = document.getElementById('sortName')
let radioIgnore = document.getElementById('sortNameIgnoreCaps');

let submitButton = document.getElementById('button');
submitButton.addEventListener("click", getInput);

let formValue = '';
function getInput() {
    formValue = document.getElementById('userName').value;
    if (radioNormal.checked){
        sortName(formValue);
    } else if (radioIgnore.checked) {
        sortNameIgnoreCaps(formValue);
    }
    
}


// Different sorting functions
function sortName(inputName) {
    console.log(inputName);
    let nameArr = inputName.split('');
    let nameArrSort = nameArr.sort(
        function(a, b){
        let x = a.toUpperCase();
        let y = b.toUpperCase();
        return x.localeCompare(y);
    });
    let nameSorted = nameArrSort.join('');
    addToHTML(nameSorted); 
}

function sortNameIgnoreCaps(inputName) {
    let nameArr = inputName.split('');
    let nameArrSort = nameArr.sort();
    let nameSorted = nameArrSort.join('');
    addToHTML(nameSorted); 
}


function addToHTML(name) {
    let divOutput = document.getElementById('output');

    if (document.getElementById('outputH3') && document.getElementById('outputP')) {
        let outputP = document.getElementById('outputP')
        outputP.innerHTML = name;
    } else {
        let outputH3 = document.createElement('h3');
        let outputP = document.createElement('p');

        outputH3.id = "outputH3"
        outputH3.innerHTML = "Your sorted name is: "
        outputP.id = "outputP"
        outputP.innerHTML = name;

        divOutput.appendChild(outputH3);
        divOutput.appendChild(outputP);
    }
    
}