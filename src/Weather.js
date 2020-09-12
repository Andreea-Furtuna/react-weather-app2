import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import FormattedDate from "./FormattedDate.js";
import "./Weather.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1>{WeatherData.city}</h1>
          </div>
          <div className="col-6">
            <form>
              <input
                type="text"
                placeholder="Type here your city...✍️"
                autoFocus="on"
                className="form"
              />
              <button className="btn btn-light" type="submit">
                GO!▶︎
              </button>
            </form>
          </div>
        </div>
        <div className="row" id="date-time">
          <div className="col-4">
            <ul>
              <li>
                <FormattedDate date={WeatherData.date} />
              </li>
            </ul>
          </div>
          <div className="col-4">
            <div className="clearfix">
              <img
                src={WeatherData.iconUrl}
                alt={WeatherData.description}
                className="float-right"
              />
            </div>
          </div>
          <div className="col-4">
            <span className="temperature">
              <strong>{Math.round(WeatherData.temperature)}</strong>
            </span>
            <span className="unit">°C |°F</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button btn btn-primary className="forecast">
              Forecast
            </button>
            <ul>
              <li>Monday: 10/8 °C | °F</li>
              <li>Tuesday: 10/8 °C | °F</li>
              <li>Wednesday: 10/8 °C | °F</li>
              <li>Thursday: 10/8 °C | °F</li>
              <li>Friday: 10/8 °C | °F</li>
            </ul>
          </div>
          <div className="col-6">
            <button btn btn-primary className="details">
              Details
            </button>
            <ul>
              <li className="text-capitalize">
                Description: {WeatherData.description}
              </li>
              <li>Humidity: {WeatherData.humidity} %</li>
              <li>Wind: {Math.round(WeatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6ef1e8464c3d2cf1f0b480456f49e6c9";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <Loader type="ThreeDots" color="black" height={60} width={60} />;
  }
}
