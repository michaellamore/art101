/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   16 November 2021
 * License:   Public Domain
 */

function sortingHat(str){

  // You can add more strings to the array and the code will still work
  let arrHouse = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

  let length = str.length;
  let mod = length % arrHouse.length;
  
  return arrHouse[mod];
}

$(document).ready(function(){
  addClickEvent();
});

function addClickEvent(){
  $("#button").click(getInput);
}

function getInput(){
  let input = $("#input").val();
  let output = sortingHat(input);

  // Only append things IF they added something in the text field
  if(input){
    appendOutput(output);
  }
}

function appendOutput(str){
  
  // Bonus task
  let houseDescription = getHouseDescription(str);

  // If there's already an output, just change the text
  if($("#outputStr").length){
    $("#outputStr").text("The sorting hat has sorted you into: " + str);
    $("#houseDesc").text(houseDescription);
  } 
  // Else, add new elements into the html with the given str
  else {
    $("#output").append("<h3 id=outputStr> The sorting hat has sorted you into: " + str + "</h3>")
    $("#output").append("<p id=houseDesc> " + houseDescription + "</p>");
  }
}

function getHouseDescription(houseName){

  // I just wanted to try out switch cases instead of multiple if statements
  // Descriptions are from harrypotter.fandom.com
  switch (houseName){
    case "Gryffindor":
      return "The particular characteristics of students sorted into Gryffindor are courage, chivalry, and determination. The emblematic animal is a lion, and its colours are red and gold.";
      break;
    case "Ravenclaw":
      return "Members of this house were characterised by their wit, learning, and wisdom. The emblematic animal symbol was an eagle, and blue and bronze were its colours.";
      break;
    case "Slytherin":
      return "Members of this house were characterised by their cunning, resourcefulness, leadership, and ambition. The emblematic animal of the house was a snake and the house's colours were green and silver.";
      break;
    case "Hufflepuff":
      return "Hufflepuff was the most inclusive among the four houses, valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members. The emblematic animal was a badger, and yellow and black were its house colours.";
      break;
    // If user decided to add a new house name, this will be given as the description
    default:
      return "Not much is known about this house, but it is said that they were one of the strongest (Or the worst, I can't recall). It is said that this house could also make great cheeseburgers.";
  }
}