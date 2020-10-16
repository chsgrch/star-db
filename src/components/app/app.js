import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from '../error-indicator'
import PeoplePage from '../people-page'
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";

const getAllPople = () => {
  console.log("getAllPerson");
  const api = new SwapiService();
  api.getAllPeople().then((res) => {
    console.log(res);
  });
};
const getAllPlanets = () => {
  console.log("getAllPlanets");
  const api = new SwapiService();
  api.getAllPlanets().then((res) => {
    console.log(res);
  });
};

const getAllStarships = () => {
  console.log("getAllStarships");
  const api = new SwapiService();
  api.getAllStarships().then((res) => {
    console.log(res);
  });
};

export default class App extends Component {
  state = {
    hasError: false,
    idItemList: null
  }
  swapiService = new SwapiService();
  componentDidMount() {
    getAllPople();
    getAllPlanets();
    getAllStarships();
  }
  componentDidCatch() {
    this.setState({ hasError: true })
  }

  onChangeDetails = (id) => {
    console.log(id)
    this.setState({ idItemList: id });
  };

  render() {
    const { hasError } = this.state;
    if (hasError) return <ErrorIndicator />
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <PeoplePage />
        {/* <PeoplePage /> */}
        {/* <PeoplePage /> */}
        <div className="planets-page">
          <ItemList
            className="planets-page__item-list"
            changeDetails={(id) => this.onChangeDetails(id)}
            getData={this.swapiService.getAllPlanets}
          />
          <PersonDetails className="planet-page__details" idItemList={this.state.idItemList} />
        </div>

        <div className="starships-planets">
          <ItemList
            className="starships-page__item-list"
            changeDetails={(id) => this.onChangeDetails(id)}
            getData={this.swapiService.getAllStarships}
          />
          <PersonDetails className="starship-page__details" idItemList={this.state.idItemList} />
        </div>
      </div>
    );
  }
}
