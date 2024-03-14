class Circle extends Shape {
  constructor(world, pos, size, options) {
    super(world, pos, size, options);
  }

  createBody() {
    return Matter.Bodies.circle(
      this.pos.x, this.pos.y, this.size.r, this.options);
  }

  drawShape() {
    circle(0, 0, this.size.r*2);
  }
}