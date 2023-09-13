import React from "react";
import "./SearchWeather.css"

export default function SearchWeather() {
  return (
    <form className="SearchWeather">
      <input type="search" placeholder="Enter a city name..."></input>
      <input type="submit" value="Search"></input>
    </form>
  );
}
