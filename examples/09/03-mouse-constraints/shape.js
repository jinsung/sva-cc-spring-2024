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
    // this is a vertual function
    console.error('please override this function');
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
    // this is a vertual function
    console.error('please override this function');
  }

  isDead() {
    if (this.body.position.y > height) {
      Matter.Composite.remove(this.world, this.body);
      return true;
    } 
    return false;
  }

  animAngle(targetAngle) {
    let angle = lerp(this.body.angle, targetAngle, 0.3);
    Matter.Body.setAngle(this.body, angle);
    //Matter.Body.setAngularVelocity(this.body, 0.1);
  }

}