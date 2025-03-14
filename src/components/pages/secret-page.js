import React from 'react'
import { Redirect } from 'react-router-dom'

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) return (
    <div className="jumbotron text-center">
      <h3>This page is top secret!!!</h3>
    </div>
  )
  else {
    return <Redirect to='login' />
  }
}

export default SecretPage;