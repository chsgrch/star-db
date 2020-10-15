import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import "./app.css";

const getAllPople = () => {
  console.log('getAllPerson')
  const api = new SwapiService();
  api.getAllPeople()
    .then(res => { console.log(res) })
}
const getAllPlanets = () => {
  console.log('getAllPlanets')
  const api = new SwapiService();
  api.getAllPlanets()
    .then(res => { console.log(res) })
}

const getAllStarships = () => {
  console.log('getAllStarships')
  const api = new SwapiService();
  api.getAllStarships()
    .then(res => { console.log(res) })
}

const items = [
  { name: 'Luke Skywalker', birth_year: '19BBY', gender: 'male', eye_color: 'blue' },
  { name: 'C-3PO', birth_year: '112BBY', gender: 'n/a', eye_color: 'yellow' },
  { name: 'R2-D2', birth_year: '33BBY', gender: 'n/a', eye_color: 'eye_color' },
  { name: 'Darth Vader', birth_year: '41.9BBY', gender: 'male', eye_color: 'yellow' },
  { name: 'Leia Organa', birth_year: '19BBY', gender: 'female', eye_color: 'brown' },
]

export default class App extends Component {
  componentDidMount() {
    getAllPople();
    getAllPlanets();
    getAllStarships();
  }
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      details: {
        name: items[0].name,
        gender: items[0].gender,
        birth_year: items[0].birth_year,
        eye_color: items[0].eye_color
      }
    }
  }

  // --- methods ---
  onChangeDetails = (id) => {
    console.log('Changed: ', id)
    const item = this.state.items.filter((el) => {
      return el.name === id
    })[0]
    this.setState({
      details: {
        name: item.name,
        gender: item.gender,
        birth_year: item.birth_year,
        eye_color: item.eye_color
      }
    })
  }

  render() {
    const { items, details } = this.state
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <div className="sw-info">
          <ItemList className="sw-info__item-list" items={items} changeDetails={(id) => this.onChangeDetails(id)} />
          <PersonDetails className="sw-info__details" details={details} />
        </div>
      </div>
    );
  }
}
