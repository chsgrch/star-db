import React, { Component } from "react";
import Spiner from "../spinner";
import ErrorIndicator from "../error-indicator";

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

    componentDidMount() {
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
  };
};

export default withData;
