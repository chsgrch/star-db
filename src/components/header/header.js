import React from "react";
import "./header.css";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { handleChangeSource } = props
  return (
    <div className="header">
      <h2 className='header__head-text'>
        <Link to='/'>
          StarWalk
          </Link>
      </h2>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <Link to={'/person/1'}>People</Link>
        </li>

        <li className="list-group-item">
          <Link to={'/planets/'}>Planets</Link>
        </li>
        <li className="list-group-item">
          <Link to={'/starships/'}>Starships</Link>
        </li>
        <li className="list-group-item">
          <Link to={'/login'}>Login</Link>
        </li>
        <li className="list-group-item">
          <Link to={'/secret'}>Secret</Link>
        </li>
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
