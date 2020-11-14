import React from "react";
import {Link} from "react-router-dom"
import CustomeButton from "../custome-button/custome-button.component"
import "./showcase.styles.scss"


const Showcase = () => (
  <div className="showcase">
    <div className="content">
      <h1 className="title">
        I am Lethu, <span >The FullStack WebDeveloper</span>
      </h1>
      <p>Specialises in React.js, Node.js and Javascript ES6</p>
      <Link to="/project">
        <CustomeButton className="btn-primary">Check My Work</CustomeButton>
      </Link>
    </div>
  </div>
);

export default Showcase;