import "./style.css";

console.log("TEST");

const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=RT48PHEPXMEVLRTE97UTBCTR9";

async function fetchWeather(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

fetchWeather(url);
