/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   26 October 2021
 * License:   Public Domain
 */

let userName = window.prompt("Hello! What's your name?", "Michael");

// Function that takes user input and sorts their input based on the letters
function sortUserName(userName) {
  let nameArr = userName.split('');

/* Based on Salman A's code:
https://stackoverflow.com/questions/68649717/how-sort-string-with-spaces-in-javascript
Under the hood, .sort compares two elements whilst sorting the array.
It gives numbers -1, 0, or 1 to compare it to the other element.
By putting in a custom function, we can tell .sort how exactly we want it to sort. */
  let nameArrSort = nameArr.sort(
    function(a, b){
      let x = a.toUpperCase();
      let y = b.toUpperCase();
      return x.localeCompare(y);
  });
  let nameSorted = nameArrSort.join('');

  // Add a p tag with an id, parent it to output container, and put the scrambled name in that div.
  outputName(nameSorted);
  // return nameSorted;
}

// Output function that gets called in sortUsername
function outputName(nameSorted){
  let div = document.getElementById("script-output");
  let text = document.createElement("h3");
  let p = document.createElement("p");
  let output = document.createTextNode(nameSorted);

  text.id="output-text";
  text.innerHTML = "Your new name:";
  p.id = "output-p";

  div.appendChild(text);
  p.appendChild(output);
  div.appendChild(p);
}

// Output
sortUserName(userName);
//document.writeln("Would you look at that! Here's your new name: ", "</br>");
