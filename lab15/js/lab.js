/*
 * Author:    Michael Remorin <mremorin@ucsc.edu>
 * Created:   25 November 2021
 * License:   Public Domain
 */

const NUMBER_API = "http://numbersapi.com/random/trivia";

$( document ).ready(function() {
  addClickEvent();
});

function addClickEvent(){
  $("#activate").on("click", function(){
    obtainTrivia();
  })
}

function obtainTrivia(){
  $.get(NUMBER_API, function(data) {
    $('#output').text(data);
});
}