const weatherInfo = document.querySelector("#weather-info");

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
  console.log("Updating UI!");
  console.log(temperatureLabel);
  console.log(data);

  addressLabel.textContent = data.resolvedAddress;
  temperatureLabel.textContent = data.temp + " F";
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

export { updateUI, toggleLoadingIndicator };
