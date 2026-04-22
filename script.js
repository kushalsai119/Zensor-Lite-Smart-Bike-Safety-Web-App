function checkSpeed() {
    let speed = document.getElementById("speed").value;
    let alertBox = document.getElementById("alerts");

    if (speed > 80) {
        alertBox.innerHTML = "⚠️ Over Speeding! Slow down.";
        playBeep();
    } else {
        alertBox.innerHTML = "✅ Safe Speed.";
    }
}

function fatigueAlert() {
    let alertBox = document.getElementById("alerts");
    alertBox.innerHTML = "😴 Take a break! You might be tired.";
    playBeep();
}

function getWeather() {
    let alertBox = document.getElementById("alerts");

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY")
    .then(response => response.json())
    .then(data => {
        let weather = data.weather[0].main;

        if (weather.toLowerCase().includes("rain")) {
            alertBox.innerHTML = "🌧️ Rain detected! Road may be slippery.";
            playBeep();
        } else {
            alertBox.innerHTML = "☀️ Weather is clear.";
        }
    })
    .catch(() => {
        alertBox.innerHTML = "Error fetching weather.";
    });
}

function playBeep() {
    let audio = new Audio("https://www.soundjay.com/buttons/beep-01a.mp3");
    audio.play();
}
