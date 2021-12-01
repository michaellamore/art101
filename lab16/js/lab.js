/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   December 2 2021
 * License:   Public Domain
 */

const MAX_INDEX = 2548;
let comicIndex;

randomizeIndex(); // The very first comic will be random
$("#activate").click(getComic);

function randomizeIndex(){ return comicIndex =  Math.floor(Math.random() * MAX_INDEX) }

function decreaseIndex(){
  if (comicIndex <= 1) return comicIndex=1; // 1 is min comic index
  comicIndex--;
}
function increaseIndex(){
  if (comicIndex >= MAX_INDEX) return comicIndex = MAX_INDEX; // 2548 is max comic index
  comicIndex++;
}

function getComic() {
  console.log("Getting Comic...");

  let link = `https://xkcd.com/${comicIndex}/info.0.json`;

  $.ajax({
      url: link,
      type: "GET",
      dataType : "json",
  })
  .done(function(data) {
    console.log("Success: ", data);

    $("#output").empty(); // Clear everything

    $("#output").append(`<div id="button-container"></div>`)
    $("#button-container").append(`<button id="previous"> Previous </button>`); // Add "previous comic" button
    $("#previous").click(function(){ // Click event
      decreaseIndex();
      getComic();
    });
    $("#button-container").append(`<button id="next"> Next </button>`); // Add "next comic" button
    $("#next").click(function(){ // Click event
      increaseIndex();
      getComic();
    });
    $("#button-container").append(`<button id="random"> Randomize </button>`); // Add "random comic" button
    $("#random").click(function(){ // Click event
      randomizeIndex();
      getComic();
    });
    
    let comicObj = data;
    let title = `<h2> ${comicObj.title} </h2>`;
    let img = `<img src="${comicObj.img}" alt="${comicObj.alt}" />`;
    $("#output").append(title);
    $("#output").append(img);
    $("#output").append(`<p> Comic index: ${comicIndex}`);
  })
  .fail(function(request,error) { 
      console.log(request, error);
	})
}

