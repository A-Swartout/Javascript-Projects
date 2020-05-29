

function color(number) {
    var favcolor = number;
    var favdialog = " is your favorite color.";
    var output;
    switch(favcolor) {
        case 1: 
            output = "Red" + favdialog;
        break;
        case 2:
            output = "Green" + favdialog;
        break;
        case 3:
            output = "Blue" + favdialog;
        break;
    }
    document.getElementById("colorstring").innerHTML = output;
}

function disease() {
    var sick = document.getElementsByClassName("sick");
    for (i = 1;i <= 4;i++) {
        sick[i].innerHTML = ":( this guy is sick too";
    }

}


function clickFunction() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(100, 100, 250, 250)
    grd.addColorStop(0, "blue")
    grd.addColorStop(1, "white")
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 250, 250);
    ctx.moveTo(0,0);
    ctx.lineTo(250,250);
    ctx.stroke();
    ctx.moveTo(250,0);
    ctx.lineTo(0,250);
    ctx.stroke();
    
}