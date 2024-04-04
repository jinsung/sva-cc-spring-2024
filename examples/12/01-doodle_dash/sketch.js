let p = new p5();
p._setup = () => {
  setup();
};
let isWorkerReady = false;

function setup() {
  console.log('setup');
  const worker = new Worker('worker.js', {
    type: 'module'
  });
  worker.onmessage = onMessageReceived;
  worker.addEventListener('message', onMessageReceived);
  worker.postMessage({action: 'load'});
}

function onMessageReceived (event) {
  console.log('data', event.data);
}