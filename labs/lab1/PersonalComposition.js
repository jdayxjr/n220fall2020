// the variables...
// let b = color('blue');
// let g = color('green');
// let r = color('red');

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(500);

  let b = color("blue");

  //fill the shape with color
  fill(b);
  // the shape length and width and type

  rect(100, 100, 100, 100);

  let g = color("green");

  fill(g);

  circle(50, 50, 50);

  let r = color("red");
  fill(r);
  rect(50, 200, 50, 200);
}
