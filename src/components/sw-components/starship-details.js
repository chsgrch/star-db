import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const StarshipDetails = ({ id }) => {
  return (
    <SwapiServiceConsumer>
      {(swapiService) => {
        return (
          <ItemDetails
            idItemList={id}
            getData={swapiService.getStarship}
            getUrl={swapiService.getStarshipImage}
          >
            <Record field={"name"} label={"Name"} />
            <Record field={"model"} label={"Model"} />
            <Record field={"manufactures"} label={"Manufactures"} />
            <Record field={"length"} label={"Length"} />
            <Record field={"passengers"} label={"Passengers"} />
            <Record field={"costInCredit"} label={"Cost"} />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;
