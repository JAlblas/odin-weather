import { fetchWeather, parseData } from "./api";
import { displayForecasts, toggleLoadingIndicator, updateUI } from "./dom";

import "./style.css";

const form = document.querySelector("form");
const input = document.querySelector("#location");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  refreshData(input.value);
  input.value = "";
});

async function refreshData(location) {
  toggleLoadingIndicator(loader);
  const json = await fetchWeather(location);
  const data = parseData(json);
  updateUI(data);
  displayForecasts(data.days);
  toggleLoadingIndicator(loader);
}

refreshData("Copenhagen");
