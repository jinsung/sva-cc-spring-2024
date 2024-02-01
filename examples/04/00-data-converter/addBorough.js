import * as fs from 'fs';
import 'dotenv/config'

const tripDate = '2023-11-06';
const tripsJson = `../data/${tripDate}.json`;
const gcp_api_key = process.env.GCP_API_KEY;

function main() {
  fs.readFile(tripsJson, async (err, fileData) => {
    if (err) {
      console.log('error:', err);
    }

    const trips = JSON.parse(fileData);
    await Promise.all(trips.stations.map(async s => {
      const lat = s.lat;
      const lng = s.lng;
      const borough = await getBorough(lat, lng);
      s.borough = borough;
    }));
    writeStationJsonFile(trips);
  });
}

function writeStationJsonFile(jsonData) {
  const stationsJsonStr = JSON.stringify(jsonData);
  fs.writeFile('../data/'+tripDate+'-borough.json', stationsJsonStr, 'utf8', (things) => {
    onJsonWrote();
  });
}

function onJsonWrote() {
  console.log('json wrote: ');
}

async function getBorough(s_lat, s_lng) {
  const uri = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${s_lat},${s_lng}&key=${gcp_api_key}`;
  console.log('uri', uri);
  const res = await fetch(uri);
  const resJson = await res.json();
  const addresses = resJson.results[0].address_components.filter(c => c.types.includes('sublocality'));
  if (addresses) {
    if (addresses.length > 0) {
      const borough = addresses[0].short_name;
      console.log('borough', borough);
      return borough;
    }
  }
  return '';
}

//main();