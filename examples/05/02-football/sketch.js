async function setup() {
  createCanvas(400, 400);
  background(200);
  const secretResponse = await fetch('./data/secret.json');
  const secretJson = await secretResponse.json();
  const apiKey = secretJson.rapid_api_key;
  const teams = [];
  const standingUrl = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  try {
    //const response = await fetch(standingUrl, options);
    const response = await fetch('./data/standings.json');
    const result = await response.json();
    console.log(result);
    const standings = result.response[0].league.standings[0];
    for (let i = 0; i < 5; i++) {
      const teamId = standings[i].team.id;
      const teamurl = `https://api-football-v1.p.rapidapi.com/v3/players?team=${teamId}&season=2020`
      //const teamRes = await fetch(teamurl);
      const teamRes = await fetch(`./data/team_${teamId}.json`);
      const teamResult = await teamRes.json();
      console.log(teamResult);
      let totalAge = 0;
      let numPlayers = 0;
      teamResult.response.forEach(res => {
        totalAge += res.player.age;
        numPlayers++;
      });
      let avgAge = 0;
      if (numPlayers > 0) {
        avgAge = totalAge/numPlayers;
      }
      const logo = await loadImagePromise (`./data/${teamId}.png`);
      const team = { id:teamId, rank: i, playersAge: avgAge, logo: logo };
      teams.push(team);
    }
  } catch (error) {
    console.error(error);
  }

  const logoSize = 50;
  const teamsLocs = [];

  text ("2020 Standings", 65, 40);
  text ("Avg Ages", 270, 40);
  teams.forEach((team, i) => {
    const x = 80;
    const y = 55 + i*60;
    
    teamLocInfo = {id: team.id, logo:team.logo, origLoc:[x, y]};
    teamsLocs.push(teamLocInfo);
  });

  const ageSortedTeams = [...teams]; // (optional) clon the array if anybody wants to use rank sorted teams array.
  ageSortedTeams.sort ((a, b) => {
    return a.playersAge - b.playersAge;
  })
  ageSortedTeams.forEach((team, i) => {
    const x = 270;
    const y = 55 + i*60;
    
    teamsLocs.forEach(loc => {
      if (loc.id === team.id) {
        loc.ageLoc = [x, y];
      }
    });
    console.log(team.playersAge);
  }); 

  teamsLocs.forEach( loc => {
    stroke(0, 50);
    strokeWeight(10);
    line(loc.origLoc[0]+logoSize/2, loc.origLoc[1]+logoSize/2,
         loc.ageLoc[0]+logoSize/2, loc.ageLoc[1]+logoSize/2);
    image(loc.logo, loc.origLoc[0], loc.origLoc[1], logoSize, logoSize);
    image(loc.logo, loc.ageLoc[0], loc.ageLoc[1], logoSize, logoSize);
  });

}

function loadImagePromise(imageUrl) {
  return new Promise((resolve, reject) => {
    loadImage(imageUrl, result => {
      resolve(result);
    })
  });
}

