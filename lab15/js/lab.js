/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   30 November 2021
 * License:   Public Domain
 */

const NUMBER_API = "https://numbersapi.com/random/trivia?json=true";

$("#activate").click(getTrivia);

function getTrivia() {
  console.log("Button was pressed");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: NUMBER_API,
      // Any data to send
      // data: { id: 123},
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType : "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
    console.log("Success:", data);
    if (typeof data != "object") return console.error ("DATA was not a valid JS object");
    let output = `<p id="trivia"> ${data.text} </p>`;
    $("#output").html(output);
  })
  // If the request fails
  .fail(function(request,error) { 
      console.log(request, error);
	})
}