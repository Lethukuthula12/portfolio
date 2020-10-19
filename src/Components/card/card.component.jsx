import React from "react";
import "./card.styles.scss"



const Card = (props) => (
  <div className="card">
    <div className="card-content">
      <h2>{props.title}</h2>
      <div className="card-par">
        <p>
          SuperCar dealership is a small car dearship firm that sells only super
          cars. they has a great reputation in the whole Province of
          Kwazulu-Natal. SuperCars have been operating since early 1988.
          Oparated by the founder Mr Bonginkosi Zikhali then passed to all
          brothers until the last born Elihle Zikhali. it Generates over 1.5B a
          year
        </p>
      </div>
      <div className="card-row">
      <div className="colomn-1">
      <h3>Created in</h3>
      </div>
      <div className="colomn-2">
       <img src={props.url} alt={props.alt}></img>
      </div>
      </div>
    </div>
  </div>
);

export default Card;
