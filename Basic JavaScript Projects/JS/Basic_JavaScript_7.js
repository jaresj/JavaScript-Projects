var x = 15;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}

function Add_numbers_2() {
    var y = 10
    document.write(x + y);
}

function Add_numbers_3() {
    console.log(x + y);
}

Add_numbers_1 ();
Add_numbers_2 ();
Add_numbers_3 ();

function get_Date() {
    if (new Date() .getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you this today?";

    }
}

function test_if() {
    if (3 > 2) {
        document.getElementById("Test").innerHTML = "The number on the left is larger than the right one!"
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 25) {
        Rent = "You are old enough to rent a car!";
    }
    else {
        Rent = "You are not old enough to rent a car!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Rent;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
        }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

