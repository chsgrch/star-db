import React, { Component } from "react";
import swApi from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./random-planet.css";

const PlanetView = (props) => {
  const { id, name, population, rotationPeriod, diameter } = props.planet;
  return (
    <React.Fragment>
      <div className="random-planet__image-container">
        <img
          className="random-planet__image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        />
      </div>

      <div className="random-planet__info">
        <h2 className="random-planet__info-header">{name}</h2>
        <ul className="random-planet__info-description">
          <li>Population: {population}</li>
          <li>Rotation: {rotationPeriod}</li>
          <li>Diameter: {diameter}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default class RandomPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: {},
      loading: true,
      error: false,
    };
    this.updatePlanet();
  }
  api = new swApi();

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    let id = Math.floor(Math.random() * 12) + 3;
    this.api
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          loading: true,
          error: false,
        });
        this.onPlanetLoaded(planet);
      })
      .catch(this.onError);
  };

  componentDidMount = () => {
    this.timerIntervalId = setInterval(() => {
      this.updatePlanet();
    }, 30000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerIntervalId);
  };

  render() {
    const { loading, planet, error } = this.state;

    const completeLoad = !(error || loading);
    const errorPage = error ? <ErrorIndicator /> : null;
    const planetView = completeLoad ? <PlanetView planet={planet} /> : null; //isLoaded=true && error=fasle
    const spiner = loading ? (
      <Spinner className="random-planet__spinner" />
    ) : null;
    return (
      <div className="random-planet">
        {planetView}
        {spiner}
        {errorPage}
      </div>
    );
  }
}
