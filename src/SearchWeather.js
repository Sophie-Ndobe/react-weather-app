import React, { useState } from "react";
import "./SearchWeather.css";
import axios from "axios";

export default function SearchWeather() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(" ");

  function displayWeather(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8342a5044534040e24d2802ce4fcc6ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="SearchWeather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city name..."
          onChange={updateCity}
        ></input>
        <button type="button" className="btn btn-primary ms-1">
          Search
        </button>
        <button type="button" className="btn btn-success ms-1">
          Current
        </button>
      </form>
      <h2 className="mt-3">Paris</h2>
      <ul>
        <li>Wednesday 13:53</li>
        <li>Clouds</li>
      </ul>

      <div className="row">
        <div className="col-6 d-flex temperatureUpdates">
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
          <h1>25</h1>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 60%</li>
            <li>Wind: 4km/h</li>
          </ul>
        </div>
      </div>

      <div className="forecast">
        <div className="row">
          <div className="col">
            <ul>
              <li>Thu</li>
              <li>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
              </li>
              <li>25°</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Fri</li>
              <li>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
              </li>
              <li>18°</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Sat</li>
              <li>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
              </li>
              <li>19°</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Sun</li>
              <li>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
              </li>
              <li>22°</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Mon</li>
              <li>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
              </li>
              <li>24°</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
