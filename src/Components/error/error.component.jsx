import React from "react";
import {Link} from "react-router-dom"
import "./error.styles.scss";
import {BiArrowBack} from "react-icons/bi"


const Error = () => (
  <div className="error">
    <h1>Sorry that was a design, we can't view demo or git repository</h1>
    <div className="btn-div"><Link to={"/"}className="error-btn">
      <BiArrowBack size={30}/>
     <p>GO BACK</p>
    </Link></div>
    
  </div>
);

export default Error;