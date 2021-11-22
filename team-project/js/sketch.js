let IMAGE;
const MAX_WIDTH = 500; // Don't make this too large. Bigger = script takes longer

$(document).ready(function() {
  eventUserImage();
  eventButton();
});

// Add event that checks when user chooses an image
function eventUserImage(){
  $("#user-image").on("change", function (){
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    $(reader).on("load", function() {
      IMAGE = loadImage(reader.result);
    })
  })
}

// Add event that checks button press. Trigger the setup function
function eventButton(){
  $("#generate-button").on("click", function(){
    redraw();
  });
}

function setup() { noLoop(); }
function draw(){
  if (IMAGE == null) { console.log("No image selected"); return }
  IMAGE.resize(MAX_WIDTH, 0);
  createCanvas(IMAGE.width, IMAGE.height);
  //background(24);

  chooseArt();
}

// Generate a random number
function genNum(min, max, int=false){
  let num = random(min, max);
  if (int == false) { return num; }
  return floor(num);
}

function artPointillism(){
  console.log("artPointillism is called");
  const SCALE = genNum(4, 20);
  for(let x = 0; x < IMAGE.width; x+=SCALE){
    for(y = 0; y < IMAGE.height; y+=SCALE){
      let pixel = IMAGE.get(x, y);
      stroke(color(pixel));
      strokeWeight(SCALE);
      point(x, y);
    }
  }
}

function artPixelate(){
  console.log("artPixelate is called");
  const SCALE = genNum(5, 15);
  for(let x = 0; x < IMAGE.width; x+=SCALE){
    for(y = 0; y < IMAGE.height; y+=SCALE){
      let pixel = IMAGE.get(x, y);
      fill(color(pixel));
      rect(x, y, SCALE, SCALE)
    }
  }
}

function artRectangles(){
  console.log("artRectangles is called");
  const SCALE = genNum(5, 20);
  for(let x = 0; x < IMAGE.width; x+=SCALE){
    for(y = 0; y < IMAGE.height; y+=SCALE){
      let pixel = IMAGE.get(x, y);
      fill(color(pixel));
      rect(x, y, SCALE, SCALE/2)
    }
  }
}

function artCurves(){
  console.log("artCurves is called");
  const SCALE = genNum(5, 10);
  for(let x = 0; x < IMAGE.width; x+=SCALE){
    for(y = 0; y < IMAGE.height; y+=SCALE){
      let pixel = IMAGE.get(x, y);
      push();
      translate(x, y);
      strokeWeight(genNum(2, SCALE))
      stroke(color(pixel));
      curve(x, y, cos(SCALE), SCALE, sin(SCALE), SCALE, cos(SCALE), SCALE)
      pop();
    }
  }
}

function chooseArt(){
  let INDEX = genNum(0, 5, true);
  console.log(INDEX);

  if (INDEX == 0) { artPixelate() }
  else if (INDEX == 1) { artRectangles() }
  else if (INDEX == 2) { artCurves() }
  else { artPointillism() }
}