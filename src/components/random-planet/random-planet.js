import React, { Component } from "react";
import "./random-planet.css";

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet">
        <div className="random-planet__image-container">
          <img
            className="random-planet__image"
            src="https://picsum.photos/600/600"
            alt="planet"
          />
        </div>
        <div className="random-planet__info">
          <h2 className="random-planet__info-header">Hoth</h2>
          <ul className="random-planet__info-description">
            <li>Population unknown</li>
            <li>Rotation Period 23</li>
            <li>Diameter 7200</li>
          </ul>
        </div>
      </div>
    );
  }
}
