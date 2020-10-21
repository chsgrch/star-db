import React from 'react'
import { withRouter } from 'react-router-dom'
import ErrorBoundry from "../error-boundry";
import { PersonList, PersonDetails } from '../sw-components'
import Row from '../row'

const PeoplePage = ({ match, location, history }) => {

  const { id } = match.params

  const personList = (
    <ErrorBoundry>
      <PersonList itemSelected={(id) => history.push(id)} />
    </ErrorBoundry>
  )

  const personDetails = (
    <ErrorBoundry>
      <PersonDetails idItemList={id} />
    </ErrorBoundry>
  )

  return (
    <ErrorBoundry>
      <Row left={personList} right={personDetails} />
    </ErrorBoundry>
  )
}

export default withRouter(PeoplePage)