let engine;
let walls;
let shapes = [];

function setup() {
  createCanvas(600, 800);
  rectMode(CENTER);
  noStroke();
  engine = Matter.Engine.create();

  walls = new Walls(engine.world);
  walls.addBottomWalls();

  const size = 25;
  let prevCircle = undefined;
  let anchor = {x: width/2, y:100};
  for (let i = 1; i < 10; i++) {
    const circle = createCircle(anchor.x + i * size * 1.1, anchor.y, size);
    
    const constraintOptions = {
      bodyB: circle.body,
      length: size * 2.5,
      stiffness: 0.5
    };

    if (prevCircle) {
      constraintOptions.bodyA = prevCircle.body;
    } else {
      constraintOptions.pointA = anchor;
    }
    const constraint = Matter.Constraint.create(constraintOptions);
    Matter.Composite.add(engine.world, constraint);
    prevCircle = circle;
  }
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
  walls.display();
}

function createCircle(x, y, r, options) {
  let circle = 
      new Circle(engine.world, 
        createVector(x,y), r, 
        options);
  
  shapes.push(circle);
  return circle;
}