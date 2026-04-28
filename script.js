function checkSpeed() {
    let speed = document.getElementById("speed").value;

    if (!speed) {
        showAlert("ENTER SPEED", "yellow");
        return;
    }

    if (speed > 80) {
        showAlert("⚠️ OVER SPEED DETECTED", "red");
        speak("Warning! You are overspeeding");

        // 🚨 AUTO OPEN MAP
        sendLocation();
    } 
    else if (speed < 30) {
        showAlert("⚡ SPEED TOO LOW", "orange");
        speak("Speed is too low");
    } 
    else {
        showAlert("✅ SPEED NORMAL", "green");
        speak("Speed is normal");
    }
}

function fatigueAlert() {
    showAlert("😴 DRIVER FATIGUE DETECTED", "orange");
    speak("Driver fatigue detected. Please take a break");
}

function getWeather() {
    showAlert("🌤 WEATHER SYSTEM ACTIVE", "blue");
    speak("Weather system activated");
}

function showAlert(msg, color) {
    let box = document.getElementById("alerts");
    box.innerHTML = msg;
    box.style.color = color;

    if (color === "red") {
        box.classList.add("blink");
    } else {
        box.classList.remove("blink");
    }
}

/* 🎙️ Voice */
function speak(text) {
    if ('speechSynthesis' in window) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.rate = 0.9;
        speech.pitch = 0.8;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(speech);
    }
}

/* 📍 LOCATION + MAP */
function sendLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            let mapURL = `https://www.google.com/maps?q=${lat},${lon}`;

            window.open(mapURL, "_blank");

        }, function() {
            alert("Unable to get location");
        });

    } else {
        alert("Geolocation not supported");
    }
}

/* Auto system message */
setInterval(() => {
    showAlert("SYSTEM MONITORING ACTIVE...", "#00eaff");
}, 15000);
}
