let canvas;
function setup() {
  canvas = createCanvas(500, 500);
  
  createP("paragraph from p5");
  createDiv("div from p5");
  createButton("btn from p5");
  createSlider("slider from p5");
}

function draw() {
  background(180);
}