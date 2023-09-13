import React, { useState } from "react";
import "./SearchWeather.css";

export default function SearchWeather() {
  let [city, setCity] = useState(" ");
  

  function handleSubmit(event) {
    event.preventDefault();
    alert(`${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form className="SearchWeather" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city name..."
        onChange={updateCity}
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );
}
