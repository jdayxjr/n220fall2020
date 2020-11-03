var xCir = 100;
var yCir =100;
let xvCir =2;
let yvCir =2;
var blocks =[50]
    //,100,150,200,250,300,350,400]

function setup(){

    createCanvas(600,400);

}
// on draw
function draw(){

background(0, 187, 255);



}
//draw a ball 
circle(xCir,yCir,20);

//animate the ball in its velocity direction
xCir += xvCir;
yCir += yvCir;

  
//bounce ball off corners
  if(xCir > 600) {
    xCir= 600;
    xvCir *= -1;
  }

  if(yCir < 0) {
    yCir = 0;
    yvCir *= -1;
  }

  if(yCir > 400) {
    yCir = 400;
    yvCir *= -1;
  }

  if(xCir < 0) {
    xCir = 0;
    xvCir *= -1;
  }
  // lopp trhough the rects
  for(let count = 0; count < blocks.length; count++){

    // draw them


    console.log()
    rect(blocks[count],50,45,15);
    //check if ball is hitting them
if(hitTestPoint(xCir,yCir, blocks[count],50,45,15)){

    console.log("its hitting");
}

//check for overlap against rectangles
function hitTestPoint(px,py,rx,ry,rw,rh) {
    if (px > rx && px < rx +rw) {

        if(py < ry && ry <ry + rh){
            return true;
        }
    }
return false;
}


}

