import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    items: [],
    error: false,
  };
  componentDidMount() {
    this.swapiService
      .getAllPeople()
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
  handleChangeDetails = (item) => {
    const { changeDetails } = this.props;
    const details = {
      id: item.id,
      name: item.name,
      gender: item.gender,
      birthYear: item.birthYear,
      eyeColor: item.eyeColor,
    };
    changeDetails(details);
  };
  render() {
    const { items } = this.state;

    const elements = items.map((item) => {
      const key = item.id;
      return (
        <li
          className="list-group-item"
          key={key}
          onClick={() => this.handleChangeDetails(item)}
        >
          {item.name} ({item.birthYear})
        </li>
      );
    });

    return <ul className="list-group item-list">{elements}</ul>;
  }
}
