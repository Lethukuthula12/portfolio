import React from "react";
import {Link} from "react-router-dom";
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
  design
}) => {

const handleChange =() =>{
  
}



  return (
    <div className="card">
      <div id="card-content">
        <div className="paragraph">
          <h2>{title}</h2>

          <div className="project-intro">
            <p>{dateOfPublish}</p>
            <p classname="tech">{technologies}</p>
            <p>{paragraph}</p>
          </div>
        </div>
        <div className="flex-colomns">
          <div className="row">
            <div className="col-1" onClick={handleChange}>
              {design ? (
                <div>
                  <div className="error-link">
                    <Link to={"/error"}>
                      <p className="design-par">Adope XD</p>
                    </Link>
                  </div>

                  <img src={firstImage} alt="image1" />
                </div>
              ) : (
                <div>
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
              )}
            </div>
            <div className="col-2">
              {design ? (
                <div>
                  <div className="error-link">
                    <Link to={"/error"}>
                      <p className="design-par">Design</p>
                    </Link>
                  </div>

                  <img src={secondImage} alt="image2" />
                </div>
              ) : (
                <div>
                  <a
                    style={{ display: "table-cell" }}
                    href={linkUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CustomeButton className="custome-button">
                      Github
                    </CustomeButton>
                    <img src={secondImage} alt="image2" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
