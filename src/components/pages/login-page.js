import React from 'react'
import { Redirect } from 'react-router-dom'

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) return <Redirect to='/' />
  return (
    <div className="jumbotron">
      <h3>Login to see secret page!</h3>
      <button className='btn btn-danger' onClick={onLogin}>{!isLoggedIn ? 'Login' : 'Log out'}</button>
    </div>
  )
}

export default LoginPage;