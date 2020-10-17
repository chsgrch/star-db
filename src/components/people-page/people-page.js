import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import "./people-page.css";

export default class PeoplePage extends Component {
  state = {
    idItemList: 1,
  };
  swapiService = new SwapiService();
  onItemSelected = (id) => {
    console.log(id);
    this.setState({ idItemList: id });
  };

  render() {
    const { idItemList } = this.state;
    const { getPerson, getPeopleImage } = this.swapiService;
    const itemList = (
      <ItemList
        className="people-page__item-list"
        itemSelected={(id) => this.onItemSelected(id)}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => {
          return `${i.name} (${i.birthYear})`;
        }}
      </ItemList>
    );
    const personDetails = (
      <ErrorBoundry>
        <ItemDetails
          idItemList={idItemList}
          getData={getPerson}
          getUrl={getPeopleImage}
        >
          <Record field={"name"} label={"Name"} />
          <Record field={"gender"} label={"Gender"} />
          <Record field={"birthYear"} label={"Birth year"} />
          <Record field={"eyeColor"} label={"Eye color"} />
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <div className="people-page">
        <ErrorBoundry>
          <Row left={itemList} right={personDetails} />
        </ErrorBoundry>
      </div>
    );
  }
}
