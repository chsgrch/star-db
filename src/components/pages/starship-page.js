import React, { Component } from 'react'
import ErrorBoundry from "../error-boundry";
import { StarshipList, StarshipDetails } from '../sw-components'
import Row from '../row'

export default class StarshipPage extends Component {
  state = {
    itemId: 11
  }

  onItemSelected = (id) => {
    this.setState({
      itemId: id
    })
  }

  render() {
    const { itemId } = this.state

    const starshipList = (
      <ErrorBoundry>
        <StarshipList itemSelected={(id) => this.onItemSelected(id)} />
      </ErrorBoundry>
    )

    const starshipDetails = (
      <ErrorBoundry>
        <StarshipDetails idItemList={itemId} />
      </ErrorBoundry>
    )

    return (
      <ErrorBoundry>
        <Row left={starshipList} right={starshipDetails} />
      </ErrorBoundry>
    )
  }
}