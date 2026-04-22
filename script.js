let speeds = [];
let labels = [];
let chart;

window.onload = function () {
    let ctx = document.getElementById("speedChart").getContext("2d");

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Speed (km/h)",
                data: speeds,
                borderWidth: 3,
                tension: 0.3
            }]
        }
    });
};

function checkSpeed() {
    let speed = document.getElementById("speed").value;

    if (!speed) {
        showAlert("Enter speed first!");
        return;
    }

    speeds.push(speed);
    labels.push("Ride " + speeds.length);
    chart.update();

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
