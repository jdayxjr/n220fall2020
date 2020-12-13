var text = document.getElementById("text");
var output = document.getElementById("output");

function breakString() {
    var inputString = text.value;
    var splitString = inputString.split(" ");

    output.innerHTML = splitString[0];

   
    

}


