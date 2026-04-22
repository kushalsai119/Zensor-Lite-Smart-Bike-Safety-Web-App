
function checkSpeed() {
    let speed = document.getElementById("speed").value;

    if (!speed) {
        showAlert("Enter speed first!");
        return;
    }


    if (speed > 80) {
        showAlert("⚠️ Over Speeding!");
    } else {
        showAlert("✅ Safe Speed");
    }
}

function fatigueAlert() {
    showAlert("😴 You might be tired. Take a break!");
}

function getWeather() {
    showAlert("🌤 Weather feature coming soon");
}

function showAlert(message) {
    let box = document.getElementById("alerts");
    box.innerHTML = message;
}

// Auto alert
setInterval(() => {
    showAlert("⏰ Stay alert while riding!");
}, 15000);
