function full_Sentence () {
    var part_1 = "All work ";
    var part_2 = "and no play ";
    var part_3 = "makes Johnny ";
    var part_4 = "a dull boy.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X = 123;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12345.678910
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}