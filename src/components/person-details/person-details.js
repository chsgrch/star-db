import React from "react";
import "./person-details.css";

function PersonDetails(props) {
  const { details } = props;
  return (
    <div className="person-details">
      <div className="person-details__image-container">
        <img
          className="person-details__image"
          src={`https://starwars-visualguide.com/assets/img/characters/${details.id}.jpg`}
          alt="person"
        />
      </div>

      <div className="person-details__info">
        <h2 className="person-details__person-name">{details.name}</h2>
        <ul className="person-details__person-description">
          <li>Gender: {details.gender}</li>
          <li>Birth year: {details.birthYear}</li>
          <li>Eye color: {details.eyeColor}</li>
        </ul>
      </div>
    </div>
  );
}

export default PersonDetails;
