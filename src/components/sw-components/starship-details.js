import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field={"name"} label={"Name"} />
      <Record field={"model"} label={"Model"} />
      <Record field={"manufactures"} label={"Manufactures"} />
      <Record field={"length"} label={"Length"} />
      <Record field={"passengers"} label={"Passengers"} />
      <Record field={"costInCredit"} label={"Cost"} />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
