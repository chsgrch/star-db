import React, { Component } from "react";
import SwapiService from '../../services/swapi-service'
import Spiner from '../spinner'
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'
import "./person-details.css";

class PersonDetails extends Component {
  state = {
    person: null,
    hasError: false
  }
  swapiServiceApi = new SwapiService()
  updatePerson = () => {
    const { idItemList } = this.props;
    if (!idItemList) return;
    this.swapiServiceApi.getPerson(idItemList)
      .then(person => {
        console.log('PERSON', person)
        this.setState({
          person: person
        })
      })
  }
  componentDidMount = () => {
    this.updatePerson();
  }
  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.idItemList !== this.props.idItemList) {
      this.setState({ person: null })
      this.updatePerson()
    }
  }
  render() {
    const { person, hasError } = this.state;
    if (hasError) return <ErrorIndicator />
    const spiner = !person ? (<div className="person-details__default">
      <h3>Select one item from list</h3>
      <Spiner className="spiner" />
    </div>) : null
    const personData = person ? <PersonData person={person} /> : null
    return (
      <div className="person-details">
        {spiner}
        {personData}
      </div>
    )
  }
}

const PersonData = (props) => {
  const { person } = props;
  return (
    <React.Fragment>
      <div className="person-details__image-container">
        <img
          className="person-details__image"
          src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
          alt="person"
        />
      </div>

      <div className="d-flex flex-column">
        <div className="person-details__info">
          <h2 className="person-details__person-name">{person.name}</h2>
          <ul className="person-details__person-description">
            <li>Gender: {person.gender}</li>
            <li>Birth year: {person.birthYear}</li>
            <li>Eye color: {person.eyeColor}</li>
          </ul>
        </div>
        <ErrorButton />
      </div>
    </React.Fragment>
  )
}

export default PersonDetails;
