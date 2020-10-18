import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const PlanetDetails = ({ id }) => {
  return (
    <SwapiServiceConsumer>
      {(swapiService) => {
        return (
          <ItemDetails
            idItemList={id}
            getData={swapiService.getPlanet}
            getUrl={swapiService.getPlanetImage}
          >
            <Record field={"name"} label={"Name"} />
            <Record field={"population"} label={"Population"} />
            <Record field={"rotationPeriod"} label={"Rotation period"} />
            <Record field={"diameter"} label={"Diameter"} />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export default PlanetDetails;
