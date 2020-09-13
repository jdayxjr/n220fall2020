// settting the size of the circle:
var radius = 20;

//setting the size of the canvas:

function setup() {
  createCanvas(400, 400);
}

function draw() {
  ellipse(mouseX, mouseY, radius, radius);
}
