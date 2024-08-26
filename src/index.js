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
  const { temp, humidity, windspeed, winddir, precipprob } =
    json.currentConditions;

  const data = { temp, humidity, windspeed, winddir, precipprob };

  return data;
}

const form = document.querySelector("form");
const input = document.querySelector("#location");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("submit");
  const json = await fetchWeather(input.value);
  console.log(parseData(json));
});
