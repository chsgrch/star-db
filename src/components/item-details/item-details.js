import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import Row from "../row";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import "./item-details.css";
import PropTypes from 'prop-types'

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      {label}: {item[field]}
    </li>
  );
};

export { Record };

class ItemDetails extends Component {

  static propTypes = {
    idItemList: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    getData: PropTypes.func,
    getUrl: PropTypes.func
  }

  state = {
    item: null,
    imgUrl: null,
    loading: true,
    error: false,
  };

  swapiServiceApi = new SwapiService();

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  updateItem = () => {
    const { idItemList, getData, getUrl } = this.props;
    if (!idItemList) return;
    getData(idItemList)
      .then((item) => {
        this.setState({
          item: item,
          imgUrl: getUrl(idItemList),
          loading: false,
          error: false,
        });
      })
      .catch(() => this.onError());
  };

  componentDidMount = () => {
    this.updateItem();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.idItemList !== this.props.idItemList ||
      prevProps.getData !== this.props.getData) {
      this.setState({
        loading: true,
        error: false,
      });
      this.updateItem();
    }
  };

  render() {
    const { item, imgUrl, error, loading } = this.state;

    const completeLoad = !(error || loading);

    const itemData = completeLoad ? (
      <ItemData
        item={item}
        url={imgUrl}
        chData={React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, { item });
        })}
      />
    ) : null;

    const spiner = loading ? <Spinner className="spiner" /> : null;

    const hasError = error ? <ErrorIndicator /> : null;

    return (
      <ErrorBoundry>
        <div className="card flex-row mr-0 ml-0 item-details">
          {itemData}
          {spiner}
          {hasError}
        </div>
      </ErrorBoundry>
    );
  }
}

const ItemData = (props) => {
  const { item, url, chData } = props;
  const img = <img className="col-md-12" src={url} alt="item" />;
  const body = (
    <div className="card-body item-details__info">
      <h4 className="item-details__item-name">{item.name}</h4>
      <ul className="list-group list-group-flush item-details__item-description">
        {chData}
      </ul>
      <ErrorButton />
    </div>
  );
  return <Row left={img} right={body} />;
};

ItemData.propTypes = {
  item: PropTypes.object,
  url: PropTypes.string,
  chData: PropTypes.node
}

export default ItemDetails;
