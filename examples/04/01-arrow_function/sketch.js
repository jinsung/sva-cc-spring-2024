function setup() {
  createCanvas(100, 100);
  background(200);
  
  let button = createButton('click me');
  button.position(0, 100);

  // 1
  //button.mousePressed(onBtnPressed);

  // 2
  /*button.mousePressed(function() {
    let g = random(255);
    background(g);
  });*/

  // 3
  button.mousePressed(() => {
    let g = random(255);
    background(g);
  });

  
}

function onBtnPressed() {
  let g = random(255);
  background(g);
}
