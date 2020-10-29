let mySquare = [

{x: 100, y: 30, w: 50, h: 50},
{x: 100, y: 30, w: 50, h: 50},
{x: 100, y: 30, w: 50, h: 50}
];

function setup(){

    createCanvas(400,300);

}

function draw(){

    for(let count =0; count > mySquare.length; i++){
    let nSquare = mySquare[count];
    rect(mySquare[i].x,mySquare[i].y,mySquare[i].r);
    }
}