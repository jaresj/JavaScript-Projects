function my_Dictionary() {
    var Animal = {
        Species: "Octopus",
        Color: "Orange",
        Age: 12,
        Defence: "Ink!" 
    };
    delete Animal.Color;
    document.getElementById("Dictionary").innerHTML= Animal.Color;
}