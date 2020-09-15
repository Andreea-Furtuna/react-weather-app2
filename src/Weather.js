import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "6ef1e8464c3d2cf1f0b480456f49e6c9";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
          </div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type here your city...✍️"
                autoFocus="on"
                className="form"
                onChange={handleCityChange}
              />
              <button className="btn btn-light" type="submit">
                GO!▶︎
              </button>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="black" height={60} width={60} />;
  }
}
