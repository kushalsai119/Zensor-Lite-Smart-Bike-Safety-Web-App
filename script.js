function checkSpeed() {
    let speed = document.getElementById("speed").value;

    if (!speed) {
        showAlert("ENTER SPEED", "yellow");
        return;
    }

    if (speed > 80) {
        showAlert("⚠️ OVER SPEED DETECTED", "red");
        speak("Warning! You are overspeeding");
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

    // blinking effect for danger
    if (color === "red") {
        box.classList.add("blink");
    } else {
        box.classList.remove("blink");
    }
}

// 🎙️ VOICE (Jarvis effect)
function speak(text) {
    if ('speechSynthesis' in window) {
        let speech = new SpeechSynthesisUtterance(text);

        speech.lang = "en-US";
        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 1;

        window.speechSynthesis.cancel(); // stop previous
        window.speechSynthesis.speak(speech);
    } else {
        console.log("Speech not supported");
    }
}
// Auto system message
setInterval(() => {
    showAlert("SYSTEM MONITORING ACTIVE...", "#00eaff");
}, 15000);

function sendLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            let locationLink = `https://www.google.com/maps?q=${lat},${lon}`;

            let message = `My current location: ${locationLink}`;
            let whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");

        }, function() {
            alert("Unable to get location");
        });

    } else {
        alert("Geolocation not supported");
    }
}
