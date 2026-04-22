function checkSpeed() {
    let speed = document.getElementById("speed").value;

    if (!speed) {
        showAlert("ENTER SPEED");
        return;
    }

    if (speed > 80) {
        showAlert("⚠️ OVER SPEED DETECTED");
    } else {
        showAlert("✅ SPEED NORMAL");
    }
}

function fatigueAlert() {
    showAlert("😴 DRIVER FATIGUE DETECTED");
}

function getWeather() {
    showAlert("🌤 WEATHER SYSTEM LOADING...");
}

function showAlert(msg) {
    document.getElementById("alerts").innerHTML = msg;
}

// Auto system message
setInterval(() => {
    showAlert("SYSTEM ACTIVE...");
}, 15000);
