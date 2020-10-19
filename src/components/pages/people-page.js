import React, { Component } from 'react'
import ErrorBoundry from "../error-boundry";
import { PersonList, PersonDetails } from '../sw-components'
import Row from '../row'

export default class PeoplePage extends Component {
  state = {
    itemId: 1
  }

  onItemSelected = (id) => {
    this.setState({
      itemId: id
    })
  }

  render() {
    const { itemId } = this.state

    const personList = (
      <ErrorBoundry>
        <PersonList itemSelected={(id) => this.onItemSelected(id)} />
      </ErrorBoundry>
    )

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails idItemList={itemId} />
      </ErrorBoundry>
    )

    return (
      <ErrorBoundry>
        <Row left={personList} right={personDetails} />
      </ErrorBoundry>
    )
  }
}