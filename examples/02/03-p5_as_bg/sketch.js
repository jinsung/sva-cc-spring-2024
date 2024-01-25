function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.addClass('background');
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(220);
}