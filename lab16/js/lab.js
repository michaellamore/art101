/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   December 2 2021
 * License:   Public Domain
 */

let link = "https://xkcd.com/info.0.json";

$("#activate").click(getTrivia);

function getTrivia() {
  console.log("Button was pressed");
  $.ajax({
      url: link,
      type: "GET",
      dataType : "json",
  })
  .done(function(data) {
    console.log("Success: ", data);
    let comicObj = data;
    let title = `<h2> ${comicObj.title} </h2>`
    let img = `<img src=${comicObj.img} alt=${comicObj.alt} />`

    $("#output").empty();
    $("#output").append(title);
    $("#output").append(img);
  })
  .fail(function(request,error) { 
      console.log(request, error);
	})
}

