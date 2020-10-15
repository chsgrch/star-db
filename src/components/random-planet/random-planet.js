import React, { Component } from "react";
import swApi from '../../services/swapi-service'
import Spinner from '../spinner'
import "./random-planet.css";

const PlanetView = (props) => {
  const { id, name, population, rotationPeriod, diameter } = props.planet
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
  )
}

export default class RandomPlanet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planet: {},
      isLoaded: false
    }
    this.updatePlanet();
  }
  api = new swApi()

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      isLoaded: true
    });
  }

  updatePlanet() {
    let id = Math.floor(Math.random() * 9) + 2;

    this.api.getPlanet(id)
      .then(planet => this.onPlanetLoaded(planet))
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isLoaded: false
      })
      this.updatePlanet()
    }, 3000)
  }

  render() {
    const { isLoaded, planet } = this.state
    return (
      <div className="random-planet">
        {
          isLoaded ?
            <PlanetView planet={planet} />
            :
            <Spinner className='random-planet__spinner' />}
      </div>
    );
  }
}