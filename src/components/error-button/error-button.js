import React, { Component } from 'react'

export default class ErrorButton extends Component {
  state = {
    renderError: false
  }
  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return (
      <button className='btn btn-danger' onClick={() => { this.setState({ renderError: true }) }}>Create error</button>
    )
  }
}