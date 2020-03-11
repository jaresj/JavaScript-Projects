function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit
}

function stringFunction() {
    var str = "Don't be afraid to be great";
    var n = str.length;
    document.getElementById("strlength").innerHTML = n;
}

var Continents = ["North America", "South America", "Europe", "Asia", "Australia", "Antarctica", "Africa"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Continents.length; Y++) {
        Content += Continents[Y] + "<br>";
    }
    document.getElementById("List_of_Continents").innerHTML = Content;
}

function array_Function() {
var list_countries = ["Canada", " Mexico", " England"];
document.getElementById("Array").innerHTML = list_countries;

}

function constant_function() {
    const Musical_Instrument = {type:"piano",brand:"FAZIOLI", color:"white"};
    Musical_Instrument.color = "ivory";
    Musical_Instrument.price = "$4500";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function let_function() {
    var m = 13;
    document.write(m);
    {
        let m = 3;
        document.write("<br>" + m)
    }
    document.write("<br>" + m);
}

function pi_Function() {
    return Math.PI;  
  }
document.getElementById("pi_demo").innerHTML = pi_Function();
 

let city = {
    state: "Oregon ",
    country: "America ",
    weather: "raining ",
    description: function() {
        return "The city Portland is in the state of " + this.state + " in " +this.country + " it is always " + this.weather + " here.";
    }
};
document.getElementById("state_object").innerHTML = city.description();