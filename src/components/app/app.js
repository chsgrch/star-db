import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import Row from "../row";
import PeoplePage from "../people-page";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components/item-lists";
import { SwapiServiceProvider } from "../swapi-service-context";
import "./app.css";

export default class App extends Component {
  state = {
    hasError: false,
    idItemList: null,
  };
  swapiService = new SwapiService();
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onChangeDetails = (id) => {
    console.log(id);
    this.setState({ idItemList: id });
  };

  render() {
    const {
      getPerson,
      getStarship,
      getPeopleImage,
      getStarshipImage,
    } = this.swapiService;

    // const personList = <PersonList />;
    const planetList = <PlanetList />;
    const starshipList = <StarshipList />;

    const { hasError } = this.state;

    if (hasError) return <ErrorIndicator />;
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="app">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <Row left={planetList} right={starshipList} />
        </div>
      </SwapiServiceProvider>
    );
  }
}
