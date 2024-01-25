import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 3000});

wss.on('connection', ws => {
  ws.on('message', data => {
    let jsonData = JSON.parse(data);
    //console.log(JSON.stringify(jsonData));
    wss.broadcast(JSON.stringify(jsonData));
  });
});

wss.broadcast = function(data) {
  wss.clients.forEach(client => client.send(data));
};