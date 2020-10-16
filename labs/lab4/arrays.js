//Neapolitan**********************************************************

let arrayColors = ["#0099ff", "#e600ff", "#00ff51"];

function setup() {
  createCanvas(500, 400);
  background(145, 242, 255);
}
function draw() {
  for (var count = 0; count < arrayColors.length; count++) {
    fill(arrayColors[count]);
    rect(80 + 100 * count, 80, 80);
  }
}

//snake**********************************************************
let LastPos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function setup() {
  creatCanvas(500, 400);
}

function draw() {
  background();
  LastPos.push(mouseX);
  LastPos.shift();

  for (var count = 0; count < LastPos.length; count++) {
    circle(LastPos[count], 150, 20);
  }
}
