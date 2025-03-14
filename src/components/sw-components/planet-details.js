import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field={"name"} label={"Name"} />
      <Record field={"population"} label={"Population"} />
      <Record field={"rotationPeriod"} label={"Rotation period"} />
      <Record field={"diameter"} label={"Diameter"} />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getUrl: swapiService.getPlanetImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
