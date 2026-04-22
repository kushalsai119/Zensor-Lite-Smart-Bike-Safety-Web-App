let speeds = [];
let labels = [];

// create chart
let ctx = document.getElementById("speedChart").getContext("2d");

let chart = new Chart(ctx, {
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

function checkSpeed() {
    let speed = document.getElementById("speed").value;

    // store data
    speeds.push(speed);
    labels.push("Ride " + speeds.length);

    // update graph
    chart.update();

    // alert
    if (speed > 80) {
        document.getElementById("alerts").innerHTML = "⚠️ Over Speeding!";
    } else {
        document.getElementById("alerts").innerHTML = "✅ Safe Speed";
    }
}

function fatigueAlert() {
    document.getElementById("alerts").innerHTML = "😴 Take a break!";
}

// auto alert
setInterval(() => {
    document.getElementById("alerts").innerHTML = "⏰ Stay alert!";
}, 15000);alert while riding!";
}, 15000);
