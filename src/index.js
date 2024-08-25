import "./style.css";

async function fetchWeather(location) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=RT48PHEPXMEVLRTE97UTBCTR9`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

function parseData(json) {
  return json.currentConditions;
}

const json = await fetchWeather("Rotterdam");
console.log(parseData(json));
