import React from "react";
import ItemListComponent from "../item-list";
import { withData } from "../hoc-helpers";
import { withSwapiService } from "../hoc-helpers";
import { withChildFunction } from '../hoc-helpers'

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

const mapPersonsMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPeople };
};
const mapPlanetsMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets };
};
const mapStarshipsMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships };
};


const PersonList = withSwapiService(mapPersonsMethodsToProps)(
  withData(
    withChildFunction(renderLabelName)(
      ItemListComponent)))

const PlanetList = withSwapiService(mapPlanetsMethodsToProps)(
  withData(
    withChildFunction(renderLabelPlanet)(
      ItemListComponent)))

const StarshipList = withSwapiService(mapStarshipsMethodsToProps)(
  withData(withChildFunction(renderLabelStarship)(
    ItemListComponent)))

export { PersonList, PlanetList, StarshipList };
