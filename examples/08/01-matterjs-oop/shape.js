class Shape {
  constructor(world, pos, size, options) {
    this.world = world;
    this.pos = pos;
    this.size = size;
    this.options = options;
    this.body = this.createBody()
    Matter.Composite.add(world, this.body);
  }

  createBody() {
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    fill(230)
    this.drawShape();
    pop();
  }

  drawShape() {

  }

  isDead() {
    if (this.body.position.y > height) {
      Matter.Composite.remove(this.world, this.body);
      return true;
    } 
    return false;
  }

}