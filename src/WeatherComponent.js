import React from "react";

export default function Weather(props) {
  if (props.weather) {
    return (
      <ul>
        <li>Temperature: {Math.round(props.weather.main.temp)} </li>
        <li>Humidity:{props.weather.main.humidity} </li>
        <li>Wind: {props.weather.wind.speed} km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
            alt="weather"
          />
        </li>
      </ul>
    );
  } else {
    return <p>Loading temperature for {props.city}..</p>;
  }
}
