let mySquare = [

    {x: 80, y: 30, color:"#EED038"},
    {x: 50, y: 30, color:"#A338EE"},
    {x: 60, y: 30, color:"#38C1EE"}
    ];
    
    function setup(){
    
        createCanvas(400,300);
    
    }
    
    function draw(){
    background(200)
        for(let count =     0; count > mySquare.length; count++){
        let nSquare = mySquare[count];
        rect(mySquare[count].x,mySquare[count].y,mySquare[count].color);
        }
    }