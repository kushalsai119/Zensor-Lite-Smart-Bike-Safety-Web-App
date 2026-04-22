let speeds = [];
let labels = [];

// create chart AFTER page loads
window.onload = function () {
    let ctx = document.getElementById("speedChart").getContext("2d");

    window.chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Speed (km/h)",
                data: speeds,
                borderWidth: 2
            }]
        }
    });
};

function checkSpeed() {
    let speed = document.getElementById("speed").value;

    speeds.push(speed);
    labels.push("Ride " + speeds.length);

    chart.update();

    if (speed > 80) {
        document.getElementById("alerts").innerHTML = "⚠️ Over Speeding!";
    } else {
        document.getElementById("alerts").innerHTML = "✅ Safe Speed";
    }
}

function fatigueAlert() {
    document.getElementById("alerts").innerHTML = "😴 Take a break!";
}

// ✅ correct auto alert
setInterval(() => {
    document.getElementById("alerts").innerHTML = "⏰ Stay alert while riding!";
}, 15000);
