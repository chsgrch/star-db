import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field={"name"} label={"Name"} />
      <Record field={"gender"} label={"Gender"} />
      <Record field={"birthYear"} label={"Birth year"} />
      <Record field={"eyeColor"} label={"Eye color"} />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getUrl: swapiService.getPeopleImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
