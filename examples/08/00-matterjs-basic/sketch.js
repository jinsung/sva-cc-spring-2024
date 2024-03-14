let engine;
let boxes = [];
let boxSize = 30;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  engine = Matter.Engine.create();
  ground = Matter.Bodies.rectangle(width/2, height, width, 50, {isStatic: true});
  Matter.Composite.add(engine.world, ground);
  Matter.Runner.run(engine);
}

function draw() {
  background(128);
  boxes.forEach(box => {
    push();
    translate(box.position.x, box.position.y);
    rotate(box.angle);
    rect(0, 0, boxSize, boxSize);
    pop();
  });

  if(mouseIsPressed){
    createBox(mouseX, mouseY);
  }
  //Matter.Engine.update(engine, 1000/60);
}

function createBox(x, y) {
  const box = Matter.Bodies.rectangle(x, y, boxSize, boxSize);
  boxes.push(box);
  Matter.Composite.add(engine.world, box);
}