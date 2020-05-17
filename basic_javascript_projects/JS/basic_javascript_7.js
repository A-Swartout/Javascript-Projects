/* global and local example */
var global = 0;
function myFunction() {
    var local = 1;
}

function twoFunction() {
    document.getElementById("error").innerHTML = global + "+" + local;
}

/* if and else statement example */
function dateFunction() {
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var day = new Date().getDate();
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    if (minute < 10) {
        document.getElementById("get_date").innerHTML = month + "/" + day + "/" + year + "<br>" + hour + ":0" + minute;
    }
    else {
        document.getElementById("get_date").innerHTML = month + "/" + day + "/" + year + "<br>" + hour + ":" + minute;
    }
    if (hour >= bedtime.value) {
        document.getElementById("goodnight").innerHTML = "Go to bed.";
    }
}

/* else if */
function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "it is morning";
    }
    else if (time > 12 == time < 18) {
        reply = "it is afternoon";
    }
    else {
        reply = "it is evening";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}