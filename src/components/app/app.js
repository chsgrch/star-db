import DummySwapiService from '../../services/dummy-swapi-service'
import ErrorIndicator from "../error-indicator";
import Header from "../header";
import { PeoplePage, PlanetPage, StarshipPage } from '../pages'
import RandomPlanet from "../random-planet";
import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import "./app.css";

export default class App extends Component {
  state = {
    hasError: false,
    idItemList: null,
    swapiService: new SwapiService()
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onChangeDetails = (id) => {
    console.log(id);
    this.setState({ idItemList: id });
  };

  onHandleChangeSource = () => {
    this.setState(({ swapiService }) => {
      const currentDataSource = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
      return {
        swapiService: new currentDataSource()
      }
    })
  }

  render() {
    const { hasError } = this.state;
    if (hasError) return <ErrorIndicator />;
    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div className="app">
          <Header handleChangeSource={() => this.onHandleChangeSource} />
          <RandomPlanet />
          {/* updateInterval={30000} */}
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </div>
      </SwapiServiceProvider>
    );
  }
}
