/* ride height function */
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "you are too short":"you are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

/* object constructor example */
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var jack = new vehicle("Dodge", "Viper", 2020, "Red");
var emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var eric = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("keywords").innerHTML = 
    "Eric drives a " + eric.vehicle_color + "-colored " + eric.vehicle_model + 
    " manufactured in " + eric.vehicle_year;
}

/* new and this example */
function info(user, pass) {
    this.username = user;
    this.password = pass;
}

var jeff = new info("bosshog1776", "@)pass%^word8*2$9");
function failFunction() {
    document.getElementById("new_this").innerHTML = "Username: " + jeff.username + 
    " Password: " + jeff.password;
}

/* nested function example */
var total = 0;
function nestedFunction() {
    document.getElementById("nested_function").innerHTML = totalFunction();
    function totalFunction() {
        total = total + 1;
        return total;
    }
}