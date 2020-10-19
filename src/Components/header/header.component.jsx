import React from "react";
import {Link} from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <h1>K2</h1>
    </Link>
    <div className="options">
      <Link className="option" to="/project">
        PROJECTS
      </Link>
      <Link className="option" to="/about">
        ABOUT
      </Link>
      <Link className="option" to="/contacts">
        CONTACTS
      </Link>
    </div>
  </div>
);

export default Header;