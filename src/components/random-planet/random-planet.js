import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./random-planet.css";
import { withSwapiService } from '../hoc-helpers'
import PropTypes from 'prop-types'

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

class RandomPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: {},
      loading: true,
      error: false,
    };
    this.updatePlanet();
  }

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
    this.props
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
    const { updateInterval } = this.props
    this.timerIntervalId = setInterval(() => {
      this.updatePlanet();
    }, updateInterval);
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
  static defaultProps = {
    updateInterval: 10000,
    getPlanet: () => new Promise((resolve, reject) => {
      resolve({})
    })
  }

  // static propTypes = {
  //   updateInterval: (props, propName, componentName) => {
  //     const value = props[propName]
  //     if (typeof value === 'number' && !isNaN(value)) {
  //       return null;
  //     }
  //     return new TypeError(`Type error in component ${componentName} with props ${propName} must be a number`)
  //   }
  // }

  static propTypes = {
    updateInterval: PropTypes.number,
    getPlanet: PropTypes.func
  }
}

const mapMethodsToProps = (swapiService) => {
  return {
    getPlanet: swapiService.getPlanet
  }
}

export default withSwapiService(mapMethodsToProps)(RandomPlanet) //RandomPlanet