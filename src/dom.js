const temperatureLabel = document.querySelector("#temperature");
const precipitationLabel = document.querySelector("#precipitation");
const humidityLabel = document.querySelector("#humidity");
const windSpeedLabel = document.querySelector("#wind-speed");
const windDirectionLabel = document.querySelector("#wind-direction");
const conditionsLabel = document.querySelector("#conditions");

function updateUI(data) {
  console.log("Updating UI!");
  console.log(temperatureLabel);
  console.log(data);

  temperatureLabel.textContent = data.temp;
  precipitationLabel.textContent = data.precipprob;
  humidityLabel.textContent = data.humidity;
  windSpeedLabel.textContent = data.windspeed;
  windDirectionLabel.textContent = data.winddir;
  conditionsLabel.textContent = data.conditions;
  //windDirectionLabel.textContent = data.icon;
}

export { updateUI };
