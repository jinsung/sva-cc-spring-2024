let canvas;
function setup() {
  canvas = createCanvas(200, 200);
  
  createP("paragraph from p5");
  createDiv("div from p5");
  createButton("btn from p5");
  createSlider("slider from p5");
}

function draw() {
  background(180);

  circle(width/2, height/2, 30);
}