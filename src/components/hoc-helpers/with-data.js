import React, { Component } from "react";
import Spiner from "../spinner";
import ErrorIndicator from "../error-indicator";
import PropTypes from 'prop-types'

const withData = (View) => {
  return class extends Component {
    state = {
      items: [],
      error: false,
      loading: true,
    };

    onError = () => {
      this.setState({
        error: true,
        loading: false,
      });
    };

    update = () => {
      this.props
        .getData()
        .then((itemList) => {
          this.setState({
            items: itemList,
            loading: false,
            error: false,
          });
        })
        .catch(() => this.onError());
    }

    componentDidMount() {
      this.update()
    }

    componentDidUpdate = (prevProps) => {
      if (prevProps.getData !== this.props.getData) {
        this.update()
      }
    }

    render() {
      const { items, error, loading } = this.state;

      const completeLoad = !(error || loading);
      const errorPage = error ? <ErrorIndicator /> : null;
      const dataView = completeLoad ? (
        <View {...this.props} data={items} />
      ) : null;
      const spiner = loading ? <Spiner /> : null;

      if (error) return <ErrorIndicator />;
      if (!items) return <Spiner />;
      return (
        <div>
          {dataView}
          {spiner}
          {errorPage}
        </div>
      );
    }
    static propTypes = {
      getData: PropTypes.func
    }
  };
};

export default withData;
