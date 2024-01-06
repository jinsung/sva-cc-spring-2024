class Trip {
  constructor(trip) {
    this.isValid = true;
    this.startStation = stations.find( s => 
      s.id === trip.start_station_id 
    );
    this.endStation = stations.find( s => 
      s.id === trip.end_station_id 
    );
    this.startedTime = parseInt(trip.st);
    this.endedTime = parseInt(trip.et);
    if (!this.startStation || !this.endStation || this.startStation.id === this.endStation.id) {
      this.isValid = false;
      console.log('trip is not valid', this);
    }
  }

  display(currentTime) {
    if (currentTime > this.startedTime && currentTime < this.endedTime) {
      const tripProgress = map(currentTime, this.startedTime, this.endedTime, 0, 1);
      const pos = this.startStation.getPos().lerp(this.endStation.getPos(), tripProgress);
      noStroke();
      fill(0, 0, 255);
      circle(pos.x, pos.y, 10);
    }
  }
}