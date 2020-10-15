import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
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
  componentDidMount() {
    getAllPople();
    getAllPlanets();
    getAllStarships();
  }
  constructor(props) {
    super(props);
    this.state = {
      details: {},
    };
  }

  onChangeDetails = (detailsData) => {
    this.setState({ details: detailsData });
  };

  render() {
    const { details } = this.state;
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <div className="sw-info">
          <ItemList
            className="sw-info__item-list"
            changeDetails={(details) => this.onChangeDetails(details)}
          />
          <PersonDetails className="sw-info__details" details={details} />
        </div>
      </div>
    );
  }
}
