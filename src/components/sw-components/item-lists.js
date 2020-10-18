import React from "react";
import ItemListComponent from "../item-list";
import { withData } from "../hoc-helpers";

import SwapiService from "../../services/swapi-service";

const { getAllPlanets, getAllPeople, getAllStarships } = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderLabelName = (item) => {
  return (
    <span>
      {item.name} ({item.birthYear})
    </span>
  );
};

const renderLabelPlanet = (item) => {
  return (
    <span>
      {item.name} ({item.population})
    </span>
  );
};

const renderLabelStarship = (item) => {
  return (
    <span>
      {item.name} ({item.length})
    </span>
  );
};

const ListWithChildrenPersons = withChildFunction(
  ItemListComponent,
  renderLabelName
);
const ListWithChildrenPlanets = withChildFunction(
  ItemListComponent,
  renderLabelPlanet
);
const ListWithChildStarships = withChildFunction(
  ItemListComponent,
  renderLabelStarship
);

const PersonList = withData(ListWithChildrenPersons, getAllPeople); //ItemListComponent
const PlanetList = withData(ListWithChildrenPlanets, getAllPlanets); //ItemListComponent
const StarshipList = withData(ListWithChildStarships, getAllStarships); //ItemListComponent

export { PersonList, PlanetList, StarshipList };
