let data;
let selectedShapeId = 0;

function setup() {
  createCanvas(400, 400);
  fetch("data.json").then(response => {
    response.json().then( json => data = json )
  });

  delay().then( () => {
    selectedShapeId = 1;
  } );
}

/*async function setup() {
  createCanvas(400, 400);

  let jsonFile = await fetch("data.json");
  data = await jsonFile.json();
}*/

function draw() {
  background(200);
  if (!data) return;

  let shape = data.shapes[selectedShapeId];
  drawShape(shape);
}

/*function draw() {
  background(200);
  if (!data) return;
  
  for (let i = 0; i < data.shapes.length; i++) {
    let shape = data.shapes[i];
    drawShape(shape);
  }
}*/

function drawShape(shape) {
  fill(shape.color);
  if (shape.name === "circle") {
    circle(shape.location[0], shape.location[1], shape.size);
  } else {
    rect(shape.location[0], shape.location[1], shape.size, shape.size);
  }
}

function delay (time) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}





