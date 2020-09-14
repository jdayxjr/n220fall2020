//PUCK SIDE****

// settting the size of the circle:
var radius = 20;

//setting the size of the canvas:

function setup() {
  createCanvas(400, 400);
}

function draw() {
  ellipse(mouseX, mouseY, radius, radius);
}

//WORLD WRAP****

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200);

  // Draw a circle
  stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);

  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  x = x - 1;

  // Reset to the bottom
  if (x < 0) {
    x = width;
  }
}

//even larger or not
function setup() {
  createCanvas(400, 400);
}
