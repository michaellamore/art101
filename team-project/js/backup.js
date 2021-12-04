const MAX_SIZE = 500; // Don't make this too large. Bigger = script takes longer

// Add event that checks when user chooses an image
// function eventUserImage(){
//   $("#user-image").on("change", function (){
//     const reader = new FileReader();
//     reader.readAsDataURL(this.files[0]);
//     $(reader).on("load", function() {
//       IMAGE = loadImage(reader.result);
//     })
//   })
// }

// Add event that checks button press. Trigger the setup function
function eventButton(){
  $("#generate-button").on("click", function(){
    redraw();
  });
}

function setup() { noLoop(); }
function draw(){
  createCanvas(MAX_SIZE, MAX_SIZE);

  chooseArt();
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



// =======================================
let density = 20;
let multiplier = 0.005;
let randomness = 0;
let size = 1;

const MAX_SIZE = 400;
let canvas;
let gap = MAX_SIZE / density;
let points;

function updateValues(){
  density = $("#density-input").val();
  multiplier = $("#multiplier-input").val() * .001;
  randomness = $("#random-input").val();
  size = $("#size-input").val();
  gap = MAX_SIZE / density;
}

function addEvents(){
  $("#clear-button").click(function(){
    clear();
    updateValues();
    setupPoints();
    generateArt();
  })
  $("#pixel-button").click(function(){
    artPixelate();
  });
}

function setup() {
  canvas = createCanvas(MAX_SIZE, MAX_SIZE);
  canvas.parent("#p5-container");

  background(24)
  angleMode(DEGREES);
  noiseDetail(1);

  addEvents();
  setupPoints();
}

function draw(){
  updateValues();
  generateArt();
}

function setupPoints(){
  points = [];

  for(let x = 0; x < width; x += gap){
    for(let y = 0; y < height; y += gap){
      let p = createVector(x + random(-randomness, randomness), y + random(-randomness, randomness));
      points.push(p);
    }
  }
}

function generateArt(){
  noStroke();
  for (let i = 0; i < points.length; i++){
    let r = map(points[i].x, 0, width, 50, 255);
    let g = map(points[i].y, 0, height, 50, 255);
    let b = map(points[i].x, 0, width, 255, 50);
    fill(r, g, b);
    let angle = map(noise(points[i].x * multiplier, points[i].y * multiplier), 0, 1, 0, 720)
    points[i].add(createVector(cos(angle), sin(angle)));
    ellipse(points[i].x, points[i].y, size);
  }
}

function artPixelate(){
  for(let x = 0; x < width; x += gap){
    for(y = 0; y < height; y += gap){
      let pixel = canvas.get(x, y);
      console.log(color(pixel));
      fill(color(pixel));
      rect(x, y, gap, gap)
    }
  }
}