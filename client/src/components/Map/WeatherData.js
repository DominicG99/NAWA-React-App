import React, { useState } from 'react';
import axios from 'axios';
import './WeatherData.css';

//stateNameToAbbreviation() Citation/Source:
//Thank you to https://gist.github.com/calebgrove/c285a9510948b633aa47 for making it easy to find a solution to this
function stateNameToAbbreviation(abbreviation) {
	let states = {
		"arizona": "AZ",
		"alabama": "AL",
		"alaska": "AK",
		"arkansas": "AR",
		"california": "CA",
		"colorado": "CO",
		"connecticut": "CT",
		"district of columbia": "DC",
		"delaware": "DE",
		"florida": "FL",
		"georgia": "GA",
		"hawaii": "HI",
		"idaho": "ID",
		"illinois": "IL",
		"indiana": "IN",
		"iowa": "IA",
		"kansas": "KS",
		"kentucky": "KY",
		"louisiana": "LA",
		"maine": "ME",
		"maryland": "MD",
		"massachusetts": "MA",
		"michigan": "MI",
		"minnesota": "MN",
		"mississippi": "MS",
		"missouri": "MO",
		"montana": "MT",
		"nebraska": "NE",
		"nevada": "NV",
		"new hampshire": "NH",
		"new jersey": "NJ",
		"new mexico": "NM",
		"new york": "NY",
		"north carolina": "NC",
		"north dakota": "ND",
		"ohio": "OH",
		"oklahoma": "OK",
		"oregon": "OR",
		"pennsylvania": "PA",
		"rhode island": "RI",
		"south carolina": "SC",
		"south dakota": "SD",
		"tennessee": "TN",
		"texas": "TX",
		"utah": "UT",
		"vermont": "VT",
		"virginia": "VA",
		"washington": "WA",
		"west virginia": "WV",
		"wisconsin": "WI",
		"wyoming": "WY",
		"american samoa": "AS",
		"guam": "GU",
		"northern mariana islands": "MP",
		"puerto rico": "PR",
		"us virgin islands": "VI",
		"us minor outlying islands": "UM"
	}

	let a = abbreviation.trim().replace(/[^\w ]/g, "").toLowerCase(); //Trim, remove all non-word characters with the exception of spaces, and convert to lowercase
	if(states[a] !== null) {
		return states[a];
	}

	return null;
}

function WeatherData(props) 
{
    let abbreviated_admin1 = stateNameToAbbreviation(props.admin1);
    let abbreviated_admin2 = stateNameToAbbreviation(props.admin2);
    console.log(props.city1);
    console.log(abbreviated_admin1);
    console.log(props.city2);
    console.log(abbreviated_admin2);

    var uri = "http://54.219.249.115/weather/multiple?city1=" + props.city1 + "&city2=" 
        + props.city2 + "&state1=" + abbreviated_admin1 + "&state2=" + abbreviated_admin2;
    console.log(uri);

    const [forecasts, setForecasts] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(uri, {withCredentials: false}
    );

    setForecasts(response.data);
    console.log(response.data)
};

  return (
    <div className="App">
      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="forecasts">
        {forecasts &&
          forecasts.map((forecast, index) => {

            return (
              <div className="forecast" key={index}>
                <h3>Forecast  for {forecast.date}</h3>
                <h2>{forecast.name}</h2>

                <div className="details">
                  <p>❄️ Min Temp: {forecast.minTemp} degrees celcius</p>
                  <p>🌡️ Max Temp: {forecast.maxTemp} degrees celcius</p>
                  <p>Max Wind Speed: {forecast.maxWindSpeed} KM/h</p>
                  <p>Max Wind Gust: {forecast.maxWindGust} KM/h</p>
                  <p>Min Humidity: {forecast.minHumidity}%</p>
                  <p>Max Humidity: {forecast.maxHumidity}%</p>
                  <p>Min Visibility: {forecast.minVisibility} meters</p>
                  <p>Max Avg Probability Precip: {forecast.maxAvgProbabilityOfPrecipitation}%</p>
                  <p>Max Probability Precip in day: {forecast.maxProbabilityOfPrecipitation}%</p>
                  <p>Max Snowfall Total: {forecast.maxSnowfallTotal} mm</p>

                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WeatherData;