const weatherInfo = document.querySelector("#weather-info");
const daysForecast = document.querySelector("#days");

const temperatureLabel = document.querySelector("#temperature");
const precipitationLabel = document.querySelector("#precipitation");
const humidityLabel = document.querySelector("#humidity");
const windSpeedLabel = document.querySelector("#wind-speed");
const windDirectionLabel = document.querySelector("#wind-direction");
const conditionsLabel = document.querySelector("#conditions");
const datetimeLabel = document.querySelector("#datetime");
const addressLabel = document.querySelector("#address");
const currentWeatherIcon = document.querySelector("#current-weather-icon");

function updateUI(data) {
  addressLabel.textContent = data.resolvedAddress;
  temperatureLabel.textContent = data.temp + " °C";
  precipitationLabel.textContent = "Precipitation: " + data.precip;
  humidityLabel.textContent = "Humidity: " + data.humidity;
  windSpeedLabel.textContent = "Wind speed: " + data.windspeed;
  windDirectionLabel.textContent = "Wind direction: " + data.winddir;
  conditionsLabel.textContent = "Conditions: " + data.conditions;
  datetimeLabel.textContent = data.datetime;
  currentWeatherIcon.src = require(`./img/${data.icon}.svg`);
}

function toggleLoadingIndicator(loader) {
  const children = weatherInfo.children;

  for (let i = 1; i < children.length; i++) {
    children[i].classList.toggle("hidden");
  }
  loader.classList.toggle("visible");
}

function displayForecasts(days) {
  days.forEach(function (day, index) {
    if (index == 0 || index > 5) {
      return;
    }
    console.log(day);
    const div = document.createElement("div");
    div.className = "forecast";

    const dateParagraph = document.createElement("p");
    const dateString = new Date(day.datetime).toLocaleString("en-us", {
      weekday: "long",
    });

    dateParagraph.textContent = dateString;
    dateParagraph.className = "dayname";
    div.appendChild(dateParagraph);

    const icon = document.createElement("img");
    icon.className = "weather-icon";
    icon.src = require(`./img/${day.icon}.svg`);
    div.appendChild(icon);

    const max = document.createElement("p");
    max.textContent = day.tempmax;
    max.style.fontWeight = "bold";
    div.appendChild(max);

    const min = document.createElement("p");
    min.textContent = day.tempmin;
    div.appendChild(min);

    daysForecast.appendChild(div);
  });
}

export { updateUI, toggleLoadingIndicator, displayForecasts };
