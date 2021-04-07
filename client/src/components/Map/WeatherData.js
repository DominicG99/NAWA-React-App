import React, { useState } from 'react';
import axios from 'axios';
import './WeatherData.css';
import ReactTooltip from "react-tooltip";

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
	axios.post("http://localhost:5000/api/users/weatherData", response.data, {
        withCredentials: true,
        credentials: "include",
      })
};

  return (
    <div className="App">
      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Load Route Forecast
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="forecasts">
        {forecasts &&
          forecasts.map((forecast, index) => {
            function formatDate(new_date){
                var today = new Date()
                let date = new Date(new_date);
                let year = date.getFullYear();
                let month = date.getMonth()+1;
                let day = date.getDate()+1;
                if(year === today.getFullYear() && month ===  today.getMonth()+1 && day ===today.getDate()){
                    return "Today";
                }
                let formatted_date = month+'/'+day+'/'+year
                return formatted_date;
            }
            

            return (
              <div className="forecast" key={index}>
                <h3>Forecast  for {formatDate(forecast.date)}</h3>
                <h2>{forecast.name}</h2>
                <div className="details">
                  <p data-tip data-for="LowTemp">Low Temp: {forecast.minTemp} degrees celcius</p>
                  <ReactTooltip id="LowTemp" place="left" type="info" effect="solid">
                     This is the low temperature along the route.
                    </ReactTooltip>

                  <p data-tip data-for="HighTemp">High Temp: {forecast.maxTemp} degrees celcius</p>
                  <ReactTooltip id="HighTemp" place="left" type="info" effect="solid">
                     This is the High temperature along the route.
                    </ReactTooltip>

                  <p data-tip data-for="windSpeeds">Max Wind Speeds: {forecast.maxWindSpeed} KM/h</p>
                  <ReactTooltip id="windSpeeds" place="left" type="info" effect="solid">
                     This is the max wind speeds along the route.
                    </ReactTooltip>

                  <p data-tip data-for="windGusts">Max Wind Gusts: {forecast.maxWindGust} KM/h</p>
                  <ReactTooltip id="windGusts" place="left" type="info" effect="solid">
                     This is the max wind gusts along the route.
                    </ReactTooltip>

                  <p data-tip data-for="minHumidity">Minimum Humidity: {forecast.minHumidity}%</p>
                  <ReactTooltip id="minHumidity" place="left" type="info" effect="solid">
                     This is the minimum humidity along the route.
                    </ReactTooltip>

                  <p data-tip data-for="maxHumidity">Max Humidity: {forecast.maxHumidity}%</p>
                  <ReactTooltip id="maxHumidity" place="left" type="info" effect="solid">
                     This is the maximum humidity along the route.
                    </ReactTooltip>

                  <p data-tip data-for="minimumVisibility">Minimum Visibility: {forecast.minVisibility} meters</p>
                  <ReactTooltip id="minimumVisibility" place="left" type="info" effect="solid">
                     This is the minimum visibility along the route.
                    </ReactTooltip>

                  <p data-tip data-for="maxChanceOfPrecip">Max Chance of Precipitation at a single time: {forecast.maxAvgProbabilityOfPrecipitation}%</p>
                  <ReactTooltip id="maxChanceOfPrecip" place="left" type="info" effect="solid">
                     This is the maximum chance of precipitation at a single time along the route.
                    </ReactTooltip>

                  <p data-tip data-for="highestAvgChanceOfPrecip">Highest Average Chance of Precipitation: {forecast.maxProbabilityOfPrecipitation}%</p>
                  <ReactTooltip id="highestAvgChanceOfPrecip" place="left" type="info" effect="solid">
                     This is the highest chance of precipitation averaged for the entire day.
                    </ReactTooltip>

                  <p data-tip data-for="maxSnowfall">Max Snowfall Total: {forecast.maxSnowfallTotal} mm</p>
                  <ReactTooltip id="maxSnowfall" place="left" type="info" effect="solid">
                     This is the max snowfall accumulation at a single location along the route.
                    </ReactTooltip>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WeatherData;