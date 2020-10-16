import React, { Component } from "react";
// import SwapiService from "../../services/swapi-service";
import Spiner from '../spinner'
import "./item-list.css";

export default class ItemList extends Component {
  // swapiService = new SwapiService();
  state = {
    items: [],
    error: false,
  };
  componentDidMount() {
    const { getData } = this.props
    // this.swapiService
    //   .getAllPeople()
    getData()
      .then((itemList) => {
        this.setState({
          items: itemList,
        });
      })
      .catch(this.onError());
  }
  onError = () => {
    this.setState({
      error: true,
    });
  };

  render() {
    const { items } = this.state;
    const { changeDetails } = this.props;

    const elements = items.map((item) => {
      const key = item.id;
      return (
        <li
          className="list-group-item"
          key={key}
          onClick={() => changeDetails(key)}
        >
          {item.name} ({item.birthYear})
        </li>
      );
    });
    const spiner = items.length === 0 ? <Spiner /> : null
    const itemList = items.length !== 0 ? <ul className="list-group item-list">{elements}</ul> : null

    return (
      <React.Fragment>
        {spiner}
        {itemList}
      </React.Fragment>
    )
  }
}
