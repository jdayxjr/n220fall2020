//stoplight**********************************************************


let stoplight = ["#F62727", "#E9ED30", "#00ff51"];

function setup() {
  createCanvas(350, 150);
  background(27,28,2);
}
function draw() {
  for (var count = 0; count < stoplight.length; count++) {
    fill(stoplight[count]);
    circle(80 + 100 * count, 80, 80);
  }
}


//bounce off**********************************************************


let xPos = 0;
let yPos = 0;

let xSpeed =2;
let ySpeed= 2;




// sets the speed of the ball x and y

function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(220);
  
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;
  
  // makes the ball move ^^^ 
  
  
  if (xPos > width || xPos < 0) {
    xSpeed = xSpeed * -1;
  //multiply by negative one to alternate bt +/- 
  //this makes the ball bounce to each side
}
  
  if (yPos > height || yPos < 0){
    ySpeed = ySpeed *-1;

    //multiply by negative one to alternate bt +/- 
  //this makes the ball bounce to each side
  }
  
  fill(27,86,237);
  circle(xPos,yPos,30);
  // draws the circle and the position of the ball where its supposed to be.
  
  
  
}