submitBtn = document.getElementById("submit-btn");
cityName = document.getElementById("city-name");
temperature = document.getElementById("weather-temperature");
icon = document.getElementById("weather-icon");
humidity = document.getElementById("weather-humidity");
description = document.getElementById("weather-description");
form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", () => getWeather());

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.getElementById("city-input").value;

  if (city) {
    getWeather(city);
  }
});

const showInfo = (data) => {
  cityName.textContent = data.name;
  temperature.textContent = parseInt(data.main.temp - 273.15) + "ºC";

  humidity.textContent = parseInt(data.main.humidity) + "%";
  description.textContent = data.weather[0].description;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};

const getWeather = (city = "New York") => {
  const api_key = "4324a892278cb26b7b1c2a449245a254";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      showInfo(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      document.getElementById("error-text").textContent =
        "City not found, try something else";
    });
};
