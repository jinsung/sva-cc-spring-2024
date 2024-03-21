class Walls {
  constructor(world) {
    this.world = world;
    this.tickness = 30;
    this.shapes = [];
  }

  addSideWalls() {
    const leftSideWall = new Rect(
      this.world,
      createVector(0, height * 0.5),
      createVector(this.tickness, height),
      { isStatic: true });
    const rightSideWall = new Rect(
      this.world,
      createVector(width, height * 0.5),
      createVector(this.tickness, height),
      { isStatic: true });
    this.shapes.push(leftSideWall, rightSideWall);
    
    return this;
  }

  addBottomWalls() {
    const bottomWall = new Rect(
      this.world,
      createVector(width * 0.5, height),
      createVector(width, this.tickness),
      { isStatic: true });
    this.shapes.push(bottomWall);
    return this;
  }

  display() {
    this.shapes.forEach(s => s.display());
  }
}