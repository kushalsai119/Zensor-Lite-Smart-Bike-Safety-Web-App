let speed = 0;

function increaseSpeed() {
    speed += 10;
    document.getElementById("speed").innerText = speed;

    if (speed > 60) {
        document.getElementById("alert").innerText = "⚠️ Over Speed!";
    } else {
        document.getElementById("alert").innerText = "";
    }
}
