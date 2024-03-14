let engine;
let shapes = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  engine = Matter.Engine.create();
  ground = new Rect(engine.world, createVector(width/2, height), 
    {w:width-20, h:50}, {isStatic: true});
  shapes.push(ground);
  Matter.Runner.run(engine);
}

function draw() {
  background(128);

  for (let i = shapes.length-1; i >= 0; i--) {
    const shape = shapes[i];
    shape.display();
    if (shape.isDead()) {
      shapes.splice(i, 1);
    }
  }

  // console.log(shapes.length, engine.world.bodies.length);
  if(mouseIsPressed){
    createShape(mouseX, mouseY);
  }
}

function createShape(x, y) {
  const options = {
    restitution: 0.6
  }
  let shape;
  if (random() > 0.5) {
    shape = 
      new Rect(engine.world, createVector(x,y), 
            {w:random(10, 50), h:random(10, 50)}, options);
  } else {
    shape = 
      new Circle(engine.world, createVector(x,y), 
          {r:random(5, 25)}, options);
  }
  shapes.push(shape);
}