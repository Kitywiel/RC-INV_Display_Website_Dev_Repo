// ---------------- CONFIG ----------------
const apiKey = "";

const fallbackLat = 52.1561; // Amersfoort
const fallbackLon = 5.3878;



// ---------------- TIME + DATE ----------------
function updateTime() {

    const now = new Date();

    document.getElementById("time").textContent =
        now.toLocaleTimeString();

    document.getElementById("date").textContent =
        now.toLocaleDateString();
}

updateTime();
setInterval(updateTime, 1000);



// ---------------- WEATHER ----------------
function getWeather(lat, lon) {

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    )

    .then(res => res.json())

    .then(data => {

        if (data.cod != 200) return;

        document.getElementById("weather-temp").textContent =
            `🌡️ Temp: ${Math.round(data.main.temp)}°C`;

        document.getElementById("weather-type").textContent =
            `☁️ Weather: ${data.weather[0].main}`;

        document.getElementById("weather-humidity").textContent =
            `💧 Humidity: ${data.main.humidity}%`;

        document.getElementById("weather-wind").textContent =
            `🌬️ Wind: ${data.wind.speed} m/s`;
    })

    .catch(err => console.log(err));
}



// ---------------- LOCATION ----------------
if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(

        (pos) => {
            getWeather(pos.coords.latitude, pos.coords.longitude);
        },

        () => {
            console.log("Using fallback location");
            getWeather(fallbackLat, fallbackLon);
        }

    );

} else {

    console.log("Geolocation not supported");
    getWeather(fallbackLat, fallbackLon);
}
