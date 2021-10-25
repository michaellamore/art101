/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   28 October 2021
 * License:   Public Domain
 */

function numSquared(num) {
  return num ** 2;
}
console.log("16 squared = ", numSquared(16));
console.log("4 squared = ", numSquared(4));

let numArray = [10, 5, 2, 81, 777, 68];
console.log("My base array: ", numArray);

let numArraySquared = numArray.map(numSquared);
console.log("My array squared: ", numArraySquared);

let isNumEven = numArraySquared.map(function(x) {
  return (x % 2 === 0);
});
console.log("Are the numbers even? ", isNumEven);

// Output these arrays onto the webpage
let outputDiv = document.getElementById('output');
let allArrays = [numArray, numArraySquared, isNumEven]
let allArraysClassification = ["Base Array", "Squared Array", "Is it Even?"]
for (let i = 0; i < allArrays.length; i++){
  // add an h3, what type of array it is, and id for CSS
  let h3 = document.createElement('h3');
  h3.innerHTML = allArraysClassification[i];
  h3.id = "output-header"
  // add it to outputDiv
  outputDiv.appendChild(h3);

  let currentArray = allArrays[i];
  // create an unordered list and an id for CSS
  let ul = document.createElement('ul');
  ul.id = "unordered-list";
  // create list item for every element in array and add to ul
  for (let ii = 0; ii < currentArray.length; ii++){
    let li = document.createElement('li');
    // whatever the element is, add it to the li
    li.innerHTML = currentArray[ii];
    ul.appendChild(li);
  }
  // add ul to outputDiv
  outputDiv.appendChild(ul);
}
