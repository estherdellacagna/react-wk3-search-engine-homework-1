import "./styles.css";
import WeatherComponent from "./WeatherComponent";
import SearchComponent from "./SearchComponent";

import React, { useState } from "react";
import axios from "axios";

const APIkey = `535adbff4597f2b7f1f8f5bc7a5b73aa`;

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  function handleCityChange(city) {
    setCity(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(url).then(function (result) {
      console.log(result);
      setWeather(result.data);
    });
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchComponent onCityChange={handleCityChange} />
      <WeatherComponent weather={weather} city={city} />
    </div>
  );
}
