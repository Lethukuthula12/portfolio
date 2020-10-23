import React from "react";


import Card from "../../card/card.component";
import Footer from "../../footer/footer.component";
import "./projects.styles.scss";

class  Project extends React.Component{
constructor(){
  super()

  this.state = {
    collection: [
      {
        id: 1,
        title: "SUPERCAR Dealership",
        dateOfPublish: "Created from 17 June to 28 August 2020",
        technologies: "React.js|Redux|Node|Firebase|Stripe",
        paragraph:
          "SuperCar dealership is a small car dearship firm that sells only  super cars. they has a great reputation in the whole Province of Kwazulu-Natal. SuperCars have been operating since early 1988. Oparated by the founder Mr Bonginkosi Zikhali then passed to allbrothers until the last born Elihle Zikhali. it Generates over 1.5B a year ",
        firstImage: require("../../../utility/car-pic1.PNG"),
        secondImage: require("../../../utility/car-pic3.PNG"),
      },
      {
        id: 2,
        title: "NsiZwa Finance Company",
        dateOfPublish: "Created from 5 Auguest to 05 October 2020",
        technologies: "HTML3|Scss3|Javascript",
        paragraph:
          "NsiZwa Finance Company is a indipendend finance film that is located in Johannesburg founded by Nsizwa Msimama after he called the company after himself. Nsizwa finance is well know as a high performing company at its industry and also being advanced in hiring most driven personal to work for them",
        firstImage: require("../../../utility/fa-pic1.PNG"),
        secondImage: require("../../../utility/fa-pic2.PNG"),
      },
    ],
  };
}

render(){
 return (
   <div className="project">
    {
      this.state.collection.map(({title, paragraph, firstImage, secondImage, id, dateOfPublish, technologies})=>(
        <Card 
        key={id} 
        title={title}  
        paragraph={paragraph}
        firstImage={firstImage} 
        secondImage={secondImage}
        dateOfPublish={dateOfPublish}
        technologies={technologies}
        />
        
      ))
    }
    <Footer/>
   </div>
 );
}
}

export default Project;