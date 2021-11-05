/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   9 November 2021
 * License:   Public Domain
 */

/* 
  I read some of the documentation, and I learned that it's good practice to do jQuery stuff when the document is loaded.
  To do this, I put all of my jQuery methods in a ready function
*/

let arrNames = ["challenge", "problems", "results"];

$(document).ready(function(){
  // Each of my custom functions NEED an array of strings to work. It will probably break if it's not an array
  addButton(arrNames);
  addClickEvent(arrNames);

  addBonusStuff(arrNames);
});

/* 
  I made my own function that creates buttons in their specific ID div.
  This function takes an array of strings, looks through each element in the array, and appends a button to that ID div
*/
function addButton(arrDivIDs){
  for(let i = 0; i < arrDivIDs.length; i++){
    $("#"+arrDivIDs[i]).append("<button id='" + arrDivIDs[i][0] + "-button'>Invert Section Colors</button>");
  }
}

// For each section in arrNames, find the button and toggle its class to "special"
function addClickEvent(arrDivIDs){
  for(let i = 0; i < arrDivIDs.length; i++){
    $("#"+arrDivIDs[i][0]+"-button").click(function(){
      $("#"+arrDivIDs[i]).toggleClass("special");
    })
  }
} 

function addBonusStuff(arrDivIDs){
  // Add three custom buttons for each section
  for(let i = 0; i < arrDivIDs.length; i++){
    // Capitalize the name of the ID
    let capitalID = arrDivIDs[i][0].toUpperCase() + arrDivIDs[i].slice(1);
    // Add a button for every Div ID (the ID of the button is just gonna be bonus-#)
    $("#bonus").append("<button id='bonus-" + i + "'>" + capitalID + "</button>");
  }
  // Add click events for each of the three buttons
  // These click events should trigger a function that will toggle the class "specialButton"
  for(let i = 0; i < arrDivIDs.length; i++){
    $("#bonus-" + i).click(function(){
      $("#"+arrDivIDs[i][0]+"-button").toggleClass("specialButton");
    })
  }
}