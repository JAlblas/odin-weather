import { fetchWeather, parseData } from "./api";
import { updateUI } from "./dom";

import "./style.css";

const form = document.querySelector("form");
const input = document.querySelector("#location");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const json = await fetchWeather(input.value);
  console.log(json);
  const data = parseData(json);

  updateUI(data);
});
