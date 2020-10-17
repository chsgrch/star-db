import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spiner from "../spinner";
import ErrorButton from "../error-button";
import Row from "../row";
import "./item-details.css";
import ErrorBoundry from "../error-boundry";

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
  };
  swapiServiceApi = new SwapiService();

  updateItem = () => {
    const { idItemList, getData, getUrl } = this.props;
    if (!idItemList) return;

    getData(idItemList).then((item) => {
      console.log("Item", item);
      this.setState({
        item: item,
        imgUrl: getUrl(idItemList),
      });
    });
  };

  componentDidMount = () => {
    this.updateItem();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.idItemList !== this.props.idItemList) {
      this.updateItem();
    }
  };

  render() {
    const { item, imgUrl } = this.state;

    const spiner = !item ? (
      <div className="item-details__default">
        <h3>Select one item from list</h3>
        <Spiner className="spiner" />
      </div>
    ) : null;

    const itemData = item ? (
      <ItemData
        item={item}
        url={imgUrl}
        chData={React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, { item });
        })}
      />
    ) : null;

    return (
      <ErrorBoundry>
        <div className="card row item-details">
          {spiner}
          {itemData}
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
