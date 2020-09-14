import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row" id="date-time">
        <div className="col-4">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-right"
            />
          </div>
        </div>
        <div className="col-4">
          <span className="temperature">
            <strong>{Math.round(props.data.temperature)}</strong>
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
              Description: {props.data.description}
            </li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
