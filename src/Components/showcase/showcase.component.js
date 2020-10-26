import React from "react";
import {Link} from "react-router-dom"
import CustomeButton from "../custome-button/custome-button.component"
import "./showcase.styles.scss"


const Showcase = () => (
  <div className="showcase">
    <div className="content">
      <h1>
        I am Lethu, <span className="title">The FullStack WebDeveloper</span>
      </h1>
      <p>Specialises in React.js, Node.js and Javascript ES3</p>
      <Link to="/project">
        <CustomeButton className="btn-primary">Check My Work</CustomeButton>
      </Link>
    </div>
  </div>
);

export default Showcase;