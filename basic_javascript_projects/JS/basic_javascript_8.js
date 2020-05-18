/* concatement example */
function myFunction() {
    var a = "Concat ";
    var b = "is ";
    var c = "useful";
    var abc = a.concat(b,c);
    document.getElementById("concat").innerHTML = abc;
}

/* .slice() & to.UpperCase method example */
function sliceFunction() {
    var a = "slice & dice";
    var b = a.slice(8);
    var c = b.toUpperCase();
    document.getElementById("sliceDice").innerHTML = c;
}

/* .search() example */
function searchFunction() {
    var groove = "Bring back the groove";
    var g = groove.search("groove");
    document.getElementById("groove").innerHTML = g;
}

/* .toString() example */
function yearFunction() {
    var year = new Date().getFullYear();
    document.getElementById("current_year").innerHTML = year.toString();
}

/* .toPrecision() example */
var rn;
var v = 0;
function randomFunction() {
    rn = Math.random();
    document.getElementById("random").innerHTML = rn.toPrecision(5);
    v = 1;
}

/* .toFixed() example */
function fixFunction() {
    if (v > 0) {
        document.getElementById("random").innerHTML = rn.toFixed(1);
    }
    else {
        v = 0;
    }
}

/* .valueOf() example */
function valueFunction() {
    var string = "Long string of words";
    var value = string.valueOf();
    document.getElementById("idkvalue").innerHTML = value;
}