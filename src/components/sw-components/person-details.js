import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = ({ id, swapiService }) => {
  const { getPerson, getPeopleImage } = swapiService;
  return (
    <ItemDetails idItemList={id} getData={getPerson} getUrl={getPeopleImage}>
      <Record field={"name"} label={"Name"} />
      <Record field={"gender"} label={"Gender"} />
      <Record field={"birthYear"} label={"Birth year"} />
      <Record field={"eyeColor"} label={"Eye color"} />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
