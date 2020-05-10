function mathFunction() {
    var d = 2+5*9, p = 4550/9-45;
    d++;
    p--;
    document.getElementById("math").innerHTML = p + d + " done";
}

function randomFunction() {
    var maths = Math.round(Math.random() * 50);
    document.getElementById("random").innerHTML = maths;
}