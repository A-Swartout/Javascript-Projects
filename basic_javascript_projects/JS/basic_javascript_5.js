var a = 25

function infinity() {
    document.getElementById("up").innerHTML = 3E400>1;
    document.getElementById("down").innerHTML = -5E500>1;
}


function myFunction() {
    document.write(typeof a);
    console.log(37 + 37);
    console.log(37 == 7);
    console.log(4 === 4);
    console.log(2 === "3");
    console.log(35 === "35");
    console.log(13 === 14);
    console.log(10>1 && 10>1);
    console.log(10>1 && 10>11);
    console.log(10>1 || 10>11);
    console.log(10>11 || 10>100);
}

function notFunction() {
    document.getElementById("true").innerHTML = !(10>11);
    document.getElementById("false").innerHTML = !(10>1);
}