import React from "react";
import "./header.css";
import PropTypes from 'prop-types'

const Header = (props) => {
  const { handleChangeSource } = props
  return (
    <div className="header">
      <h2>StarWalk</h2>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">People</li>
        <li className="list-group-item">Planets</li>
        <li className="list-group-item">Starships</li>
        <li className='list-group-item' onClick={handleChangeSource()}>
          <button className='btn btn-info'>
            Change source
            </button>
        </li>
      </ul>
    </div>
  );
};

Header.defaultProps = {
  handleChangeSource: () => { }
}

Header.propTypes = {
  handleChangeSource: PropTypes.func
}

export default Header;
