let myArr = [100, 200, 300];
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  for (let num of myArr) {
    fill(255, 0, 0);
    circle(num, 50, 30);
  }

  myArr.forEach(num => {
    fill(0, 255, 0)
    circle(num, 100, 30);
  });

  const newArr = myArr.map(x => x+50);

  newArr.forEach((num, i) => {
    fill(0, 0, i*255);
    circle(num, 150, 30);
  });

}
