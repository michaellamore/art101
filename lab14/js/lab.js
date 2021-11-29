/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   30 November 2021
 * License:   Public Domain
 */


// Defining variables
let myTransport = [
  " bus",
  " rides from friends",
  " Uber",
  " Lyft"
]
console.log("My forms of transportation: ", myTransport);

let myMainRide = {
  make: "Tesla",
  model: "Model S",
  color: "Solid Black",
  year: "2012",
}
console.log("My dream ride is: ", myMainRide);


// Output transport
$("#debugging").append(`<ul id="transportation"> My forms of transportation: </ul>`);
for (let i=0; i<myTransport.length; i++){
  console.log("Current transport: ", myTransport[i])

  $("#transportation").append(`<li> ${myTransport[i]} </li>`);
}


// Output my dream ride
$("#debugging").append(`<ul id="ride"> My dream ride: </ul>`);
for (let key in myMainRide) {
  console.log("Dream ride (current key): ", key)

  let upperKey = key.toUpperCase();
  $("#ride").append(`<li> ${upperKey}: ${myMainRide[key]} </li>`);
}