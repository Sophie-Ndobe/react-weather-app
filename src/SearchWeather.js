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
        <input type="submit" value="Search"></input>
      </form>
      <h2>Paris</h2>
      <ul>
        <li>Wednesday 13:53</li>
        <li>Clouds</li>
      </ul>

      <div className="row">
        <span className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
          <h1>25</h1>
        </span>
        <span className="col-6">
          <ul>
            <li>Precipitation: 60%</li>
            <li>Wind: 4km/h</li>
          </ul>
        </span>

      </div>
    </div>
  );
}
