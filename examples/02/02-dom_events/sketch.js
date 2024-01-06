let canvas;
let btn;
let myBtn;
let slider;
let circles = [];
let squares = [];

function setup() {
  canvas = createCanvas(200, 200);
  
  btn = createButton("circle");
  btn.mousePressed(onBtnPressed);
  let maxSquareNum = 10;
  slider = createSlider(0, maxSquareNum, 0);
  for (let i=0; i < maxSquareNum; i++) {
    squares.push({x:random(width), y:random(height)});
  }

  myBtn = select("#my-btn");
  myBtn.mouseClicked(onMyBtnClicked);
}

function onBtnPressed() {
  circles.push({x:random(width), y:random(height)});
}

function onMyBtnClicked() {
  let container = select("container")
  let div = createElement("div", "hello");
  div.parent(container);
}

function draw() {
  background(180);
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    circle(c.x, c.y, 10);
  }
  
  let sqaureNum = Math.round(slider.value());
  for (let i = 0; i < sqaureNum; i++) {
    let s = squares[i];
    rect(s.x, s.y, 10);
  }
}