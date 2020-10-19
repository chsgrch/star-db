import React, { Component } from 'react'
import ErrorBoundry from "../error-boundry";
import { PlanetList, PlanetDetails } from '../sw-components'
import Row from '../row'

export default class PlanetPage extends Component {
  state = {
    itemId: 5
  }

  onItemSelected = (id) => {
    this.setState({
      itemId: id
    })
  }

  render() {
    const { itemId } = this.state

    const planetList = (
      <ErrorBoundry>
        <PlanetList itemSelected={(id) => this.onItemSelected(id)} />
      </ErrorBoundry>
    )

    const planetDetails = (
      <ErrorBoundry>
        <PlanetDetails idItemList={itemId} />
      </ErrorBoundry>
    )

    return (
      <ErrorBoundry>
        <Row left={planetList} right={planetDetails} />
      </ErrorBoundry>
    )
  }
}