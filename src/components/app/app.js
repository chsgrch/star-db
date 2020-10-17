import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import ItemDetails, { Record } from "../item-details/item-details";
import Row from "../row";
import PeoplePage from "../people-page";
// import Record from "../item-details";

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
    idItemList: null,
  };
  swapiService = new SwapiService();
  componentDidMount() {
    getAllPople();
    getAllPlanets();
    getAllStarships();
  }
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

    const personDetails = (
      <ItemDetails idItemList={11} getData={getPerson} getUrl={getPeopleImage}>
        <Record field={"name"} label={"Name"} />
        <Record field={"gender"} label={"Gender"} />
        <Record field={"birthYear"} label={"Birth year"} />
        <Record field={"eyeColor"} label={"Eye color"} />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        idItemList={11}
        getData={getStarship}
        getUrl={getStarshipImage}
      >
        <Record field={"name"} label={"Name"} />
        <Record field={"model"} label={"Model"} />
        <Record field={"manufactures"} label={"Manufactures"} />
        <Record field={"length"} label={"Length"} />
        <Record field={"passengers"} label={"Passengers"} />
        <Record field={"costInCredit"} label={"Cost"} />
      </ItemDetails>
    );

    const { hasError } = this.state;

    if (hasError) return <ErrorIndicator />;
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}
