import React from 'react'
import ErrorBoundry from "../error-boundry";
import { StarshipList } from '../sw-components'
import { withRouter } from 'react-router-dom'

const StarshipPage = ({ match, location, history }) => {
  return (
    <ErrorBoundry>
      <StarshipList itemSelected={(id) => {
        console.log(match)
        history.push(id)
      }
      } />
    </ErrorBoundry>
  )
}

export default withRouter(StarshipPage);