var health=100;

function onSlap() {
    health=health-1;
    update();
    
}

function onPunch() {
    health=health-5;
    update();
}

function onKick() {
    health=health-10;
    update();
}

function update() {
    document.getElementById("health").innerText = health;
}

function special() {
    document.getElementById("dummy").style="background-image:url('http://network.mugenguild.com/guild/images/kain.gif')";
    document.getElementById("dummy").innerHTML="";
}