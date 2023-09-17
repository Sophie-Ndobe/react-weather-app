import React from "react";
import axios from "axios";

export default function WeatherForecast() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];



  

  return (
    <div className="WeatherForecast">
      {days.map(function (day, index) {
        return <div key={index}>{day}</div>;
      })}
      This is where the forecast goes
    </div>
  );
}
