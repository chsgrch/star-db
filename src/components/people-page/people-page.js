import React, { Component } from 'react'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from '../error-indicator'
import SwapiService from "../../services/swapi-service";
import './people-page.css'

export default class PeoplePage extends Component {
  state = {
    idItemList: 1,
    hasError: false
  }
  swapiService = new SwapiService();
  onChangeDetails = (id) => {
    console.log(id)
    this.setState({ idItemList: id });
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }
  render() {
    const { idItemList, hasError } = this.state
    if (hasError) return <ErrorIndicator />
    return (
      <div className="people-page">
        <ItemList
          className="people-page__item-list"
          changeDetails={(id) => this.onChangeDetails(id)}
          getData={this.swapiService.getAllPeople}
        />
        <PersonDetails className="people-page__details" idItemList={idItemList} />
      </div>
    )
  }
}