import React, { Component } from 'react'
import './item-list.css'

export default class ItemList extends Component {
  render() {
    const { items, changeDetails } = this.props
    const elements = items.map(item => {
      return (
        <li
          className="list-group-item"
          key={item.name}
          onClick={() => changeDetails(item.name)}
        >
          {item.name}({item.birth_year})
        </li>
      )
    })

    return (
      <ul className="list-group item-list">{elements}</ul>
    )
  }
}