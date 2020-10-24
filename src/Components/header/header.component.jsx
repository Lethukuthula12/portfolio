import React from "react";
import {Link} from "react-router-dom";
import Icon from "../../utility/Icon.svg"
import "./header.styles.scss";


const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={Icon} alt="icon" />
    </Link>
    <div className="options">
      <Link className="option" to="/project">
        PROJECTS
      </Link>
      <Link className="option" to="/about">
        ABOUT
      </Link>
      <Link className="option" to="/contact">
        CONTACTS
      </Link>
    </div>
  </div>
);

export default Header;