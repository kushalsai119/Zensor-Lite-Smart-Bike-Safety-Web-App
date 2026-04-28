let map;
let marker;
let userInteracted = false;

// detect user interaction (needed for auto actions)
document.addEventListener("click", () => {
    userInteracted = true;
});

// 🎯 SPEED CHECK
function checkSpeed() {
    let speed = document.getElementById("speed").value;

    if (!speed) {
        showAlert("ENTER SPEED");
        return;
    }

    if (speed > 80) {
        showAlert("⚠️ OVER SPEED DETECTED");
        speak("Warning! You are overspeeding");

        // 🚨 Auto trigger (only after user interaction)
        if (userInteracted) {
            setTimeout(() => {
                sendLocation();
                notifyParent();
            }, 1000);
        }
    } else {
        showAlert("✅ SPEED NORMAL");
    }
}

// 📍 GET LOCATION + MAP + GOOGLE MAPS
function sendLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(pos => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        // 🌐 Open Google Maps
        let mapURL = `https://www.google.com/maps?q=${lat},${lon}`;
        window.open(mapURL, "_blank");

        // 🗺️ Show inside app (dark map)
        if (!map) {
            map = L.map('map').setView([lat, lon], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data'
            }).addTo(map);
        }

        if (marker) {
            map.removeLayer(marker);
        }

        marker = L.marker([lat, lon]).addTo(map);

    }, () => {
        alert("Location permission needed");
    });
}

// 📲 SEND TO PARENT (WhatsApp)
function notifyParent() {
    let parentNumber = "91XXXXXXXXXX"; // 👉 PUT PARENT NUMBER HERE

    navigator.geolocation.getCurrentPosition(pos => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        let link = `https://www.google.com/maps?q=${lat},${lon}`;
        let message = `Emergency! Overspeed detected. Location: ${link}`;

        let url = `https://wa.me/${parentNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });
}

// 🔊 VOICE
function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

// 🧠 ALERT
function showAlert(msg) {
    document.getElementById("alerts").innerHTML = msg;
}
