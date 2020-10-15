import React from 'react'
import './person-details.css'

function PersonDetails(props) {
  const { details } = props
  return (
    <div className="person-details">
      <div className="person-details__image-container">
        <img
          className="person-details__image"
          src="https://picsum.photos/300/500"
          alt="person"
        />
      </div>

      <div className="person-details__info">
        <h2 className="person-details__person-name">{details.name}</h2>
        <ul className="person-details__person-description">
          <li>{details.gender}</li>
          <li>{details.birth_year}</li>
          <li>{details.eye_color}</li>
        </ul>
      </div>
    </div>
  )
}

export default PersonDetails;