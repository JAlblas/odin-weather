const temperatureLabel = document.querySelector("#temperature");
const precipitationLabel = document.querySelector("#precipitation");
const humidityLabel = document.querySelector("#humidity");
const windSpeedLabel = document.querySelector("#wind-speed");
const windDirectionLabel = document.querySelector("#wind-direction");
const conditionsLabel = document.querySelector("#conditions");
const datetimeLabel = document.querySelector("#datetime");
const addressLabel = document.querySelector("#address");

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
  windDirectionLabel.textContent = data.icon;
  datetimeLabel.textContent = data.datetime;
}

export { updateUI };
