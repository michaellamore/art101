const ART = {
  0: ["./img/slideshow/sprawl-stock.jpeg", "Sprawl by Mark J. Stock"],
  1: ["./img/slideshow/collection-brunner.png", "A collection of generative art by Katharina Brunner"],
  2: ["./img/slideshow/computational-plotter-hoff.jpg", "Computational Plotter by Anders Hoff"],
  3: ["./img/slideshow/gen-art-hoff.jpg", "Generative Art by Anders Hoff"],
  4: ["./img/slideshow/gen-art-naon.jpeg", "Generative Art by Manolo Gamboa Naon"],
  5: ["./img/slideshow/gyre35700-stock.jpg", "Gyre 35700 by Mark Stock"],
  6: ["./img/slideshow/platonic-solids-hansmeyer.jpg", "Platonic Solids by Michael Hansmeyer"]
}

let index = 0;

function decrement(){
  index--;
  if (index < 0) index = Object.keys(ART).length - 1;
}

function increment(){
  index++;
  if (index >= Object.keys(ART).length) index = 0;
}

function updateHTML(){
  $("#slideshow-img").attr("src", ART[index][0]);
  $("#slideshow-img").attr("alt", ART[index][1]);

  $("#art-caption").html(ART[index][1]);
}


$( document ).ready(function() {
  // When HTML is ready, add button events
  $(".prev").click(function(){ 
    decrement(); 
    updateHTML();
  });
  $(".next").click(function(){ 
    increment(); 
    updateHTML();
  });

  updateHTML();
});