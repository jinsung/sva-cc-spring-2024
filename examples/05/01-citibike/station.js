class Station {
  constructor(station) {
    this.isValid = true;
    this.id = station.id;
    const x = map(station.lng, minLng, maxLng, 0, width);
    const y = map(station.lat, minLat, maxLat, height, 0);
    this.pos = createVector(x, y);
    if (this.pos.x > width || this.pos.y > height) {
      this.isValid = false;
    }
    if (this.pos.x === width) {
      this.isValid = false;
    }
  }

  getPos() {
    return this.pos.copy();
  }

  display() {
    noStroke();
    fill(150);
    circle(this.pos.x, this.pos.y, 5);
  }

}