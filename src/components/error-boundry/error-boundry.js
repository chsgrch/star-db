import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";
import PropTypes from 'prop-types'

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return this.props.children;
  }

  static propTypes = {
    data: PropTypes.node
  }
}
