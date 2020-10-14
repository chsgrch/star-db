import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>StarWalk</h2>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">People</li>
        <li className="list-group-item">Planets</li>
        <li className="list-group-item">Starships</li>
      </ul>
    </div>
  );
};

export default Header;
