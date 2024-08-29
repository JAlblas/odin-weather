async function fetchWeather(location) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=RT48PHEPXMEVLRTE97UTBCTR9&unitGroup=metric`;

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
  console.log(json);
  const {
    temp,
    humidity,
    windspeed,
    winddir,
    precip,
    icon,
    conditions,
    datetime,
  } = json.currentConditions;
  const { resolvedAddress, days } = json;

  const data = {
    resolvedAddress,
    temp,
    humidity,
    windspeed,
    winddir,
    precip,
    icon,
    conditions,
    datetime,
    days,
  };

  return data;
}

export { fetchWeather, parseData };
