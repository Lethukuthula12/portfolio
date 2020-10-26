import React from "react";
import "./card.styles.scss";


import CustomeButton from "../custome-button/custome-button.component"




const Card = ({
  title,
  paragraph,
  firstImage,
  secondImage,
  dateOfPublish,
  technologies,
  linkUrl1,
  linkUrl2,
 
}) => {

const handleChange =() =>{
  
}



  return (
    <div className="card">
      <div id="content" className="content">
        <div>
          <h2>{title}</h2>

          <div className="project-intro">
            <p>{dateOfPublish}</p>
            <p className="tech">{technologies}</p>
            <p>{paragraph}</p>
          </div>
        </div>
        <div className="flex-colomns">
          <div className="row">
            <div className="col-1" onClick={handleChange}>
              <a
                style={{ display: "table-cell" }}
                href={linkUrl1}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomeButton className="custome-button">
                  View Demo
                </CustomeButton>
                <img src={firstImage} alt="image1" />
              </a>
            </div>
            <div className="col-2">
              <a
                style={{ display: "table-cell" }}
                href={linkUrl2}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomeButton className="custome-button">Github</CustomeButton>
                <img src={secondImage} alt="image2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
