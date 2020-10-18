import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import Row from "../row";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import "./item-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      {label}: {item[field]}
    </li>
  );
};

export { Record };

class ItemDetails extends Component {
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

  onItemLoaded = (item) => {
    const { idItemList, getUrl } = this.props;
    this.setState({
      item: item,
      imgUrl: getUrl(idItemList),
      loading: false,
      error: false,
    });
  };

  updateItem = () => {
    const { idItemList, getData } = this.props;
    if (!idItemList) return;
    getData(idItemList)
      .then((item) => {
        this.onItemLoaded(item);
      })
      .catch(() => this.onError());
  };

  componentDidMount = () => {
    this.updateItem();
  };

  componentDidUpdate = (prevProps) => {
    console.log("UPDATE");
    if (prevProps.idItemList !== this.props.idItemList) {
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
        <div className="card row item-details">
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
  const img = <img className="item-details__image" src={url} alt="item" />;
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

export default ItemDetails;
