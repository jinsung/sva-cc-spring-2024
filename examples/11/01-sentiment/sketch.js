let sentiment;
let input;
let button;
let freshTomatoImg;
let rottenTomatoImg;
let prediction;

function preload() {
  freshTomatoImg = loadImage('./assets/fresh-tomato.png');
  rottenTomatoImg = loadImage('./assets/rotten-tomato.png');
}

function setup() {
  createCanvas(300, 300);
  sentiment = ml5.sentiment('moviereviews', modelReady)
  
}

function modelReady() {
  console.log('Model Loaded!');
  const uiY = 20;
  input = createInput();
  input.position(20, uiY);

  button = createButton('submit');
  button.position(input.x + input.width, uiY);
  button.mousePressed(predict);
}

function predict() {
  const str = input.value();
  prediction = sentiment.predict(str);
  console.log(prediction);
}

function draw() {
  background(225);
  if (prediction) {
    const w = 50;
    const h = 50;
    const x = width/2 - w/2;
    const y = height/2 - h/2;
    if (prediction.score > 0.5) {
      image(freshTomatoImg, x, y, w, h);
    } else {
      image(rottenTomatoImg, x, y, w, h)
    }
  }
  
}