import { fetchWeather, parseData } from "./api";
import { toggleLoadingIndicator, updateUI } from "./dom";

import "./style.css";

const form = document.querySelector("form");
const input = document.querySelector("#location");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const json = await fetchWeather(input.value);
  const data = parseData(json);

  updateUI(data);
});

toggleLoadingIndicator(loader);
const json = await fetchWeather("Copenhagen");
const data = parseData(json);
updateUI(data);

toggleLoadingIndicator(loader);
