import React from "react";
import "./item-list.css";
import PropTypes from 'prop-types'

const ItemListComponent = (props) => {
  const renderItems = () => {
    const { itemSelected, data } = props;
    const elements = data.map((item) => {
      const { id } = item;
      const label = props.children(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => itemSelected(id)}
        >
          {label}
        </li>
      );
    });

    return data.length !== 0 ? (
      <ul className="list-group item-list">{elements}</ul>
    ) : null;
  };

  const itemList = renderItems();

  return <div className="row mb2 mr-0 ml-0">{itemList}</div>;
};

ItemListComponent.defaultProps = {
  itemSelected: () => { }
}

ItemListComponent.propTypes = {
  itemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.func
}

export default ItemListComponent;
