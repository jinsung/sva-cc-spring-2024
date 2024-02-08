const myArr = [100, 200, 300];

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

function setup() {
  createCanvas(400, 400);

  items.sort(compareItem);
  console.log(items);

  const filtered = items.filter(item => item.value > 30);
  console.log(filtered);
}

function compareItem(a, b) {
  return a.value - b.value;
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
