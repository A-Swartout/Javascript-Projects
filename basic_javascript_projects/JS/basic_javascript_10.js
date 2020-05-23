function loopFunction() {
    var counter = 0;
    var total = "";
    while (counter < 11) {
        total += "<br>" + counter;
        counter++;
    }
    document.getElementById("loop").innerHTML = "<br>" + total;
}

function stringFunction() {
    var s = "number plus numbers equal numbers";
    var l = s.length;
    document.getElementById("string").innerHTML = "There are " + l + " characters in the string.";
}

let names = ["steve", "joshua", "bean", "matt", "carol"];
var all = "";
var count;
function forLoop() {
    for (count = 0; count < names.length; count++) {
        all += names[count] + "<br>";
    } 
    document.getElementById("names").innerHTML = all;
    document.getElementById("array").innerHTML = names[2] + " & " + names[4] + " have been together for years.";
}

function conFunction() {
    const bottles = {water:"half full", juice:"1/4th full", salad_dressing:"full"};
    bottles.beer = "empty";
    bottles.water = "empty";
    document.getElementById("constant").innerHTML = "The water is " + bottles.water + " & the beer is " + bottles.beer + ".";
}

var number = doomFunction(76);
function doomFunction(x) {
    return x + " things";
}

function buttonClick() {
    document.getElementById("stuff").innerHTML = number;
}