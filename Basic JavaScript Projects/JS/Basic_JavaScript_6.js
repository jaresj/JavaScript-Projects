function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Pet(Name, Animal, Sex, Age) {
    this.Pet_Name = Name;
    this.Pet_Aniaml = Animal;
    this.Pet_Sex = Sex;
    this.Pet_Age = Age;
}

var Justice = new Pet("Kitty", "Cat", "Female", 9);
function newFunction() {
    document.getElementById("New_and_This").innerHTML = "Justice has a pet " + Justice.Pet_Aniaml + " whose name is " + Justice.Pet_Name + " and she is " + Justice.Pet_Age + " years old.";

}


function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1}
        Plus_one();
        return Starting_point;
    }
}