function displayType(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert(animalType + " is a part of the " + animal.innerHTML + " species!");
}