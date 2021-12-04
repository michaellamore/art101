let maxIterations = 500;
let multiplier = 0.005;
let strokeSize = 1;
let rValue = 255;
let gValue = 255;
let bValue = 255;
let transparency = 50;
let weight = 1;

const MAX_SIZE = 400;
let canvas;
let iterations;
let xOff;
let generatingArt;

function setup(){
  $("#clear-button").click(function(){
    clear();
    updateValues();
    setupArt();
    generateArt();
  })
  $("#pixelate-button").click(function(){addPixels();})
  $("#circle-button").click(function(){addCircles();})
  $("#save-button").click(function(){save("masterpiece.png");})

  canvas = createCanvas(MAX_SIZE,MAX_SIZE);
  canvas.parent("#p5-container");
  setupArt();
}

function draw(){
  generateArt();
}

function setupArt(){
  noiseSeed(random(100));
  background("#242424");
  strokeWeight(strokeSize);
  noFill();

  iterations = 0;
  xOff = 0;
  generatingArt = true;
}

function generateArt(){
  if(generatingArt){
    let x1 = width * noise(xOff + 15);
    let x2 = width * noise(xOff + 25);
    let x3 = width * noise(xOff + 35);
    let x4 = width * noise(xOff + 45);
    let y1 = height * noise(xOff + 55);
    let y2 = height * noise(xOff + 65);
    let y3 = height * noise(xOff + 75);
    let y4 = height * noise(xOff + 85);

    let r = rValue * noise(xOff + 10);
    let g = gValue * noise(xOff + 20);
    let b = bValue * noise(xOff + 30);
    stroke(r, g, b, transparency);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    xOff += multiplier;
    iterations++;
  }

  if (iterations > maxIterations){
    generatingArt = false; 
  }
}

function updateValues(){
  maxIterations = $("#iteration-input").val() * 1;
  multiplier = $("#multiplier-input").val() * .001;
  strokeSize = $("#size-input").val() * 1;
  rValue = $("#red-input").val() * 1;
  gValue = $("#green-input").val() * 1;
  bValue = $("#blue-input").val() * 1;
  transparency = $("#transparent-input").val() * 1;
  weight = $("#weight-input").val() * 1;
}

function addPixels(){
  updateValues();
  for(let x = 0; x < width; x += 20){
    for(y = 0; y < height; y += 20){
      let pixel = canvas.get(x, y);
      stroke(color(pixel));
      strokeWeight(weight);
      rect(x, y, 15, 15)
    }
  }
}

function addCircles(){
  updateValues();
  for(let x = 0; x < width; x+=20){
    for(y = 0; y < height; y+=20){
      let pixel = canvas.get(x, y);
      stroke(color(pixel));
      strokeWeight(weight);
      ellipse(x, y, 15);
    }
  }
}