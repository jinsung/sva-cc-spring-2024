let data;

function preload() {
  data = loadJSON("data.json");
}

function setup() {
  createCanvas(400, 400);

  // javascript object notation
  /*data = {
    "name": "circle",
    "size": 100,
    "color": [255, 0, 0]
  };*/
}

function draw() {
  background(200);
  
  for (let i = 0; i < data.shapes.length; i++) {
    let shape = data.shapes[i];
    fill(shape.color);
    if (shape.name === "circle") {
      circle(shape.location[0], shape.location[1], shape.size);
    } else {
      rect(shape.location[0], shape.location[1], shape.size, shape.size);
    }
  }
  

}
