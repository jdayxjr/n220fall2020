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


let xCircle = 0;
let yCircle = 0;

let rectX = 100;
let rectY =100;
let rectW= 0;
let rectH= 0;

let xSpeed =2;
let ySpeed= 2;




// sets the speed of the ball x and y

function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(220);
  
  xCircle = xCircle + xSpeed;
  yCircle = yCircle + ySpeed;
  
  // makes the ball move ^^^ 
  
  
  if (xCircle > width || xCircle < 0) {
    xSpeed = xSpeed * -1;
  //multiply by negative one to alternate bt +/- 
  //this makes the ball bounce to each side
}
  
  if (yCircle > height || yCircle < 0){
    ySpeed = ySpeed *-1;

    //multiply by negative one to alternate bt +/- 
  //this makes the ball bounce to each side
  }
  
  fill(27,86,237);
  circle(xCircle,yCircle,30);
  // draws the circle and the position of the ball where its supposed to be.
  

  fill(86);
  circle(rectX,rectY,30);
  // draws the rect and the position of the ball where its supposed to be.
  
  function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   }

   return false;

}
}