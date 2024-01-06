const date = "2023-11-06";
let data;
let stations = [];
let trips = [];
let maxLat, minLat, maxLng, minLng;
let currentTime;
let maxTime;

function preload() {
  data = loadJSON("../data/" + date + ".json");
}

function setup() {
  maxLat = Math.max(...data.stations.map( o => o.lat));
  minLat = Math.min(...data.stations.map( o => o.lat));
  maxLng = Math.max(...data.stations.map( o => o.lng));
  minLng = Math.min(...data.stations.map( o => o.lng));
  const mult = 1.3;
  createCanvas(580*mult, 600*mult);
  background(255);
  
  data.stations.forEach(s => {
    const station = new Station(s);
    if (station.isValid) {
      stations.push(station);
    }
  });

  data.trips.forEach(t => {
    const trip = new Trip(t);
    if (trip.isValid) {
      trips.push(trip);
    }
  });

  currentTime = parseInt(trips[0].startedTime);
  maxTime = parseInt(trips[trips.length-1].startedTime);
}

function draw() {
  background(230);
  stations.forEach(s => {
    s.display();
  });

  trips.forEach( t => {
    t.display(currentTime);
  });

  currentTime += 60000;
  if (currentTime > maxTime) {
    noLoop();
  }
  const time = new Date(currentTime);
  const timeStr = formatAMPM(time);
  fill(0);
  textSize(20);
  text (timeStr, 50, 50);
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}