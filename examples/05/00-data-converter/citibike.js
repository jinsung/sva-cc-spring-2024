import { promises as fs } from 'fs';
import {parse} from 'csv';

// getting file from https://s3.amazonaws.com/tripdata/index.html
const tripCSVFilePath = '../data/202311-citibike-tripdata.csv';
const tripDate = '2023-11-06';

let citibikeData = {stations:[], trips:[]};

main();

async function main() {
  let tempStationArray = [];
  try {
    const rows = await parseCsv(tripCSVFilePath, {columns: true, trim: true});
    rows.forEach(trip => {
      const ssi = trip.start_station_id;
      const esi = trip.end_station_id;
      if (ssi.length > 0 && !tempStationArray.includes(ssi)) {
        tempStationArray.push(ssi);
        addStation(trip, true);
      }
      if (esi.length > 0 && !tempStationArray.includes(esi)) {
        tempStationArray.push(esi);
        addStation(trip, false);
      }

      if (typeof trip.started_at !== 'string' || typeof trip.started_at !== 'string' ) {
        return;
      }
      if (trip.start_station_id.length === 0 || trip.end_station_id.length === 0) {
        return;
      }
      
      const start = trip.started_at.split(' ');
      const end = trip.ended_at.split(' ');

      if(start.length !== 2 || end.length !== 2) return;

      const start_date = start[0];
      const start_time = start[1];
      const end_date = end[0];
      const end_time = end[1];

      if (start_date === tripDate && end_date === tripDate) {
        addTrip(trip, start_time, end_time);
      }
    });
    
    writeStationJsonFile();
  } catch(err) {
    console.log('error:', err);
  }
}

async function parseCsv (csvFilePath, options) {
  const csvData = await fs.readFile(csvFilePath);
  return new Promise((resolve, reject) => {
    parse(csvData, options, (err, rows) => {
      if (err) {
        reject("could not parse" + err);
      } else {
        resolve(rows);
      }
    });
  });
}

async function writeStationJsonFile() {
  citibikeData.trips.sort((a, b) => a.st - b.st);
  const stationsJsonStr = JSON.stringify(citibikeData);
  const filePath = '../data/'+tripDate+'.json';
  await fs.writeFile(filePath, stationsJsonStr, 'utf8');
  console.log('json file wrote with ', citibikeData.trips.length, 'trips at ', filePath);
}

function addTrip(_trip, s_time, e_time) {
  const startDateString = tripDate+"T"+s_time;
  const endDateString = tripDate+"T"+e_time;
  const startTimeStamp = Date.parse(startDateString);
  const endTimeStamp = Date.parse(endDateString);
  const trip = {
    "st": startTimeStamp,
    "et": endTimeStamp, 
    "start_station_id": _trip.start_station_id, 
    "end_station_id": _trip.end_station_id, 
  }
  citibikeData.trips.push(trip);
  console.log('trip added:', citibikeData.trips.length);
}

function addStation (trip, isStartStation) {
  let s_id = trip.end_station_id;
  let s_name = trip.end_station_name;
  let s_lat = trip.end_lat;
  let s_lng = trip.end_lng;
  if (isStartStation) {
    s_id = trip.start_station_id;
    s_name = trip.start_station_name;
    s_lat = trip.start_lat;
    s_lng = trip.start_lng;
  }
  
  const station = {
    "id": s_id, 
    "name": s_name,
    "lat": s_lat,
    "lng": s_lng
  };
  citibikeData.stations.push(station);
  console.log('station added:', station.name);
}