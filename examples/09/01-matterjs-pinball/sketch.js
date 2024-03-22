let engine;
let shapes = [];
let leftPaddle;
let rightPaddle;

function setup() {
  createCanvas(600, 800);
  rectMode(CENTER);
  engine = Matter.Engine.create();

  const leftSideWall = new Rect(engine.world, createVector(0, height * 0.5), 
    {w:30, h: height}, {isStatic: true});
  const rightSideWall = new Rect(engine.world, createVector(width, height * 0.5), 
    {w:30, h: height}, {isStatic: true});
  leftPaddle = new Rect(engine.world, createVector(width * 0.3, height * 0.8), 
    {w:width * 0.35, h:30}, {isStatic: true, angle: PI/4});
    rightPaddle = new Rect(engine.world, createVector(width * 0.7, height * 0.8), 
    {w:width * 0.35, h:30}, {isStatic: true, angle: -PI/4});
  shapes.push(leftSideWall);
  shapes.push(rightSideWall);
  shapes.push(leftPaddle);
  shapes.push(rightPaddle);
  Matter.Runner.run(engine);

  setInterval(() => {
    if (shapes.length < 5) {
      this.createShape(random(width*0.25, width*0.75), 0);
    }
  }, 1000)
}

function draw() {
  background(128);
  let targetLeftAngle = PI * 0.25;
  let targetRightAngle = -PI * 0.25;
  if (keyIsPressed) {
    if (keyIsDown(LEFT_ARROW)) {
      targetLeftAngle = -PI * 0.25;
    } 
    if (keyIsDown(RIGHT_ARROW)) {
      targetRightAngle = PI * 0.25;
    }
  }

  leftPaddle.animAngle(targetLeftAngle);
  rightPaddle.animAngle(targetRightAngle);

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
    restitution: 1, 
    //density: 0.005,
    inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0
  }
  let shape = 
      new Circle(engine.world, createVector(x,y), {r:25}, options);
  
  shapes.push(shape);
}