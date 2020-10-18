import React, { Component } from "react";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import "./people-page.css";

import { PersonList } from "../sw-components/item-lists";
import { PersonDetails } from "../sw-components";

export default class PeoplePage extends Component {
  state = {
    idItemList: 1,
  };

  onItemSelected = (id) => {
    this.setState({ idItemList: id });
  };

  render() {
    const { idItemList } = this.state;

    const itemList = (
      <PersonList itemSelected={(id) => this.onItemSelected(id)}></PersonList>
    );

    const details = (
      <ErrorBoundry>
        <PersonDetails idItemList={idItemList} />
      </ErrorBoundry>
    );

    return (
      <div className="people-page">
        <ErrorBoundry>
          <Row left={itemList} right={details} />
        </ErrorBoundry>
      </div>
    );
  }
}
