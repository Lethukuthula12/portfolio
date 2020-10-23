import React from "react";
import "./card.styles.scss"

import CustomeButton from "../custome-button/custome-button.component"



const Card = ({
  title,
  paragraph,
  firstImage,
  secondImage,
  dateOfPublish,
  technologies,
}) => (
  <div className="card">
    <div id="content" className="content">
      <div>
        <h2>{title}</h2>
        <div className="project-intro">
          <p>{dateOfPublish}</p>
          <p>{technologies}</p>
          <p>{paragraph}</p>
        </div>
      </div>
      <div className="flex-colomns">
        <div className="row">
          <div className="col-1">
            <img src={firstImage} Alt="image1" />
          </div>
          <div className="col-2">
            <img src={secondImage} Alt="image2" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
