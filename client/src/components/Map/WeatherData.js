import React, { useState } from 'react';
import axios from 'axios';
import './WeatherData.css';

function WeatherData() {
  const [forecasts, setForecasts] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://54.183.152.114/weather/multiple?city1=Auburn&city2=Auburn&state1=CA&state2=CA'
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
                <h3>Forecast {index} days out from now</h3>
                <h2>{forecast.name}</h2>

                <div className="details">
                  <p>❄️ Min: {forecast.min} degrees celcius</p>
                  <p>🌡️ Max: {forecast.max} degrees celcius</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WeatherData;