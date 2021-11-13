/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   18 November 2021
 * License:   Public Domain
 */

$("#runButton").click(fizzBuzzBoom);

let maxNum = 0;
function getInput(){
  maxNum = $("#maxNumberInput").val();
  let number0 = $("#number0").val();
  let string0 = $("#string0").val();

  let number1 = $("#number1").val();
  let string1 = $("#string1").val();

  let number2 = $("#number2").val();
  let string2 = $("#string2").val();

  let number3 = $("#number3").val();
  let string3 = $("#string3").val();

  return [[number0, string0], [number1, string1], [number2, string2], [number3, string3]];
}

function fizzBuzzBoom(){

  let inputArr = getInput();
  // This is gonna be a FAT array
  let outputArr = [];

  for(let currentNum = 0; currentNum <= maxNum; currentNum++){
    let tempOutput = String(currentNum) + " - ";

    if (currentNum % inputArr[0][0] === 0) tempOutput += `${inputArr[0][1]} `;
    if (currentNum % inputArr[1][0] === 0) tempOutput += `${inputArr[1][1]} `;
    if (currentNum % inputArr[2][0] === 0) tempOutput += `${inputArr[2][1]} `;
    if (currentNum % inputArr[3][0] === 0) tempOutput += `${inputArr[3][1]} `;

    outputArr.push(tempOutput);
  }
  appendOutput(outputArr);
}

function appendOutput(outputArr){

  let columnNum = 5;

  if(!$("#col0").length){
    console.log("if");
    // Create columns
    for (let currentCol = 0; currentCol < columnNum; currentCol++){
      $("#outputColumns").append(`<div class="column" id="col${currentCol}""> </div>`);
    }
    // Obtain number of elements in outputArr
    let maxElements = Math.floor(outputArr.length / columnNum) + 1;

    for (let currentEl = 0; currentEl < outputArr.length; currentEl++){
      // Append elements to each column. Once a column reaches maxElements, move onto next column
      if (currentEl < maxElements){
        $("#col0").append(`<p id=outputEl0> ${outputArr[currentEl]} </p>`);
      }
      else if (currentEl < maxElements*2){
        $("#col1").append(`<p id=outputEl1> ${outputArr[currentEl]} </p>`);
      }
      else if (currentEl < maxElements*3){
        $("#col2").append(`<p id=outputEl2> ${outputArr[currentEl]} </p>`);
      }
      else if (currentEl < maxElements*4){
        $("#col3").append(`<p id=outputEl3> ${outputArr[currentEl]} </p>`);
      }
      else if (currentEl <= maxElements*5){
        $("#col4").append(`<p id=outputEl4> ${outputArr[currentEl]} </p>`);
      }
    }
  } else {
    //console.log("else");
    let maxElements = Math.floor(outputArr.length / columnNum) + 1;

    for (let currentEl = 0; currentEl < outputArr.length; currentEl++){
      // Append elements to each column. Once a column reaches maxElements, move onto next column
      if (currentEl < maxElements){
        $("#outputEl0").text(outputArr[currentEl]);
      }
      else if (currentEl < maxElements*2){
        $("#outputEl1").text(outputArr[currentEl]);
      }
      else if (currentEl < maxElements*3){
        $("#outputEl2").text(outputArr[currentEl]);
      }
      else if (currentEl < maxElements*4){
        $("#outputEl3").text(outputArr[currentEl]);
      }
      else if (currentEl <= maxElements*5){
        $("#outputEl4").text(outputArr[currentEl]);
      }
    }
  }

}