let rnn;
let input;
let button;
let generated;
let tempSlider;
let lengthSlider;
let running = false;

function setup() {
  createCanvas(300, 300);
  rnn = ml5.charRNN('./models/hemingway', modelReady);
}

function modelReady() {
  console.log('Model Loaded!');
  const uiY = 20;
  input = createInput();
  input.position(20, uiY);
  input.input(generate);

  tempSlider = select('#tempSlider');
  tempSlider.input(updateSliders);
  lengthSlider = select('#lenSlider');
  lengthSlider.input(updateSliders);

  button = createButton('generate');
  button.position(input.x + input.width, uiY);
  button.mousePressed(generate);
}

function clear() {
  generated = null;
}

// Update the slider values
function updateSliders() {
  select('#length').html(lengthSlider.value());
  select('#temperature').html(tempSlider.value());
}

function generate() {
  if (running) return;
  generated = input.value();
  const original = input.value();
  const txt = original.toLowerCase();

  if (txt.length > 0) {
    const data = {
      seed: txt, 
      temperature: tempSlider.value(), 
      length: lengthSlider.value()
    };

    rnn.generate(data, gotData);
  }
  running = true;
}

function gotData(err, result) {
  if (!err) {
    console.log(result);
    generated = result.sample;
  } else {
    console.error(err);
  }
  running = false;
}

function draw() {
  background(225);
  if (generated) {
    const txt = input.value() + generated;
    text(txt, 10, 50, width - 10, height - 50);
  }
}