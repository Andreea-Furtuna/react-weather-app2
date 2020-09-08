import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>Amsterdam</h1>
        </div>
        <div className="col-6">
          <input
            type="text"
            placeholder="Type here your city...✍️"
            autoFocus="on"
            autoComplete="off"
          />
          <button class="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
