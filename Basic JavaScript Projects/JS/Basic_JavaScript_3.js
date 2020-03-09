function add_Function() {
    var addition = 3 + 5;
    document.getElementById("add").innerHTML = "3 + 5 = " + addition;
}

function subtract_Function() {
    var subtraction = 3 - 5;
    document.getElementById("subtract").innerHTML = "3 - 5 = " + subtraction;
}

function multiply_Function() {
    var mutiplication = 3 * 5;
    document.getElementById("multiply").innerHTML = "3 * 5 = " + mutiplication;
}

function division_Function() {
    var division = 3 / 5;
    document.getElementById("divide").innerHTML = "3 / 5 = " + division
}

function extra_Math() {
    var simple_Math = (2 + 12) * 6 / 4 - 11;
    document.getElementById("Math").innerHTML = "2 plus 12, multiplied by six, divided by four and then subtracted by 11 equals " + simple_Math;
}

function modulus_Operator() {
    var modulus_Math = 25 % 3;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 3 you have a remainder of: " + modulus_Math;
}

function negation_Operator() {
    var x = 7;
    document.getElementById("negation").innerHTML = -x;
}

 
function increment_decrement() {
var a = 3;
var b = 3;
a++;
b--;
var y = a
var z = b
document.getElementById("increment").innerHTML = y;
document.getElementById("decrement").innerHTML = z;
}

window.alert(Math.PI);