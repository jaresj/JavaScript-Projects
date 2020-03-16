function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = "'s are an amazing animal!"
    switch(Animals) {
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Elephant":
            Animal_Output = "Elephant" + Animal_String;
        break;
        case "Octopus":
            Animal_Output = "Octopus" + Animal_String;
        break;
        case "Dolphin":
            Animal_Output = "Dolphin" + Animal_String;
        break;
        case "Horse":
            Animal_Output = "Horse" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient (75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);