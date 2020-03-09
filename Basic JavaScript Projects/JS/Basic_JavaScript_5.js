function myFunction() {
    var res = "";
    res = res + isNaN('This is a string') + ": 'This is a string'<br>";
    res = res + isNaN(12) + ": 12<br>";

    document.getElementById("Test").innerHTML = res;
}

function infinity() {
    var x = (3E424)
    var y = (-4E530)

    document.getElementById("infinity_positive").innerHTML = x;
    document.getElementById("infinity_negative").innerHTML = y;
}

document.write(3 > 12); 
document.write("<br>");
document.write("12" + 3);
document.write("<br>");
document.write(3==3);
document.write("<br>");
document.write(3==4);
document.write("<br>");
document.write(10 === 10);
document.write("<br>");
document.write("Words" === 10);
document.write("<br>");
document.write("10" === 10);
document.write("<br>");
document.write(10 === 13);
document.write("<br>");
document.write(3> 2 && 12 > 10);
document.write("<br>");
document.write(3 > 2 && 4 > 4);
document.write("<br>");
document.write(3 > 2 || 12 > 10);
document.write("<br>");
document.write(4 < 1 || 5 > 6);


console.log(4+3);
console.log(1>3);

function not_function() {
    document.getElementById("Not_True").innerHTML =! (5 > 10);
    document.getElementById("Not_False").innerHTML =! ( 20 > 10);
}