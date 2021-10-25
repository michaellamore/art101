/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   21 October 2021
 * License:   Public Domain
 */


// Defining variables
 let myTransport = [
   " bus",
   " rides from friends",
   " Uber",
   " Lyft"
 ]

 let myMainRide = {
   make: "Tesla",
   model: "Model S",
   color: "Solid Black",
   year: "2012",
   age: function () {
     return 2021 - age;
   }
 }

 // Output
document.writeln("My current forms of transportation: ", myTransport, "</br>");
document.writeln("My dream ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
