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
        title: "OnlyBuy",
        dateOfPublish: "IN PROGRESS",
        technologies: "React.js|Context",
        paragraph:
          "OnlyBuy is the online store used to purchase your favourite clothes ranging from young to adults",
        firstImage: require("../../../utility/store1.PNG"),
        secondImage: require("../../../utility/store2.PNG"),
        linkUrl1: "https://onlybuy.netlify.app/",
        linkUrl2: "https://github.com/Lethukuthula12/ecommerse",
      },
      {
        id: 1,
        title: "Corona Virus Tracker",
        dateOfPublish: "Developed from 10 October to 30 Octoer 2020",
        technologies: "React.js|Axios",
        paragraph:
          "Corona Virus tracker that help users to get a daily updates on confirmed, recovered, deaths cases. The data is access from the international corona virus API ",
        firstImage: require("../../../utility/corona1.PNG"),
        secondImage: require("../../../utility/corona2.PNG"),
        linkUrl1: "https://supercar-dealership.herokuapp.com/",
        linkUrl2: "https://github.com/Lethukuthula12/Car-dealership",
      },
      {
        id: 2,
        title: "SUPERCAR Dealership",
        dateOfPublish: "Developed from 17 June to 28 August 2020",
        technologies: "'React.js|Redux|Scss|' 'Firebase|stripe'",
        paragraph:
          "SuperCar dealership is a small car dearship firm that sells only  super cars. You can purchase as many cars as you fish completely online",
        firstImage: require("../../../utility/car-pic1.PNG"),
        secondImage: require("../../../utility/car-pic3.PNG"),
        linkUrl1: "https://supercar-dealership.herokuapp.com/",
        linkUrl2: "https://github.com/Lethukuthula12/Car-dealership",
      },
      {
        id: 3,
        title: "Your U",
        dateOfPublish: "10 October to 15 October 2020",
        technologies: "React.sj|CSS|Firebase",
        paragraph:
          "YourU is an online app where you can save your pictures as much as you want. those images are saved secured on a firebase storage",
        firstImage: require("../../../utility/gal-pic1.PNG"),
        secondImage: require("../../../utility/gal-pic2.PNG"),
        linkUrl1: "https://youru-app.herokuapp.com/",
        linkUrl2: "https://github.com/Lethukuthula12/YourU-Gallery-",
      },
      {
        id: 4,
        title: "Hi! Chat APP",
        dateOfPublish: "Designed On 07 November 2020",
        technologies: "Adope XD",
        paragraph:
          "Designed an app for Chatting with your loved ones. in this App you can chat, make a call and video record",
        firstImage: require("../../../utility/chat3.jpg"),
        secondImage: require("../../../utility/chat1.jpg"),
        linkUrl1: "",
        linkUrl2: "",
        design: true,
      },
      {
        id: 4,
        title: "Zumane Truck Service",
        dateOfPublish: "Developed 30 July to 15 October 2019",
        technologies: "C#|MVC.Net|APIs|Entinty Framework|SQL",
        paragraph:
          "Zumane Truck Service is the logistic company that transport coil from Mines to Eskom (South African electricity public utility). located in Piet Retief. Mpumalanga. 2380 South Africa",
        firstImage: require("../../../utility/truck1.png"),
        secondImage: require("../../../utility/truck2.png"),
        linkUrl1:
          "https://drive.google.com/drive/u/3/folders/1ljcMhJ1sTzj622IUrvtMVIPDkgFAqjyX",
        linkUrl2:
          "https://github.com/Ntombiyoxolo/Bright-Solutions/tree/master/WebAPI",
      },
      {
        id: 5,
        title: "NsiZwa Finance Company",
        dateOfPublish: "Developed from 5 Auguest to 05 October 2020",
        technologies: "HTML3|Scss3|Javascript",
        paragraph:
          "NsiZwa Finance Company is a indipendend finance film that is located in Johannesburg founded by Nsizwa Msimama after he called the company after himself. Nsizwa finance is well know as a high performing company at its industry and also being advanced in hiring most driven personal to work for them",
        firstImage: require("../../../utility/fa-pic1.PNG"),
        secondImage: require("../../../utility/fa-pic2.PNG"),
        linkUrl1: "https://lethukuthula12.github.io/NsizwaFinance/#",
        linkUrl2: "https://github.com/Lethukuthula12/NsizwaFinance",
      },
      {
        id: 6,
        title: "Zame Fashion Design",
        dateOfPublish: "Designed On 06 November 2020",
        technologies: "Adope XD",
        paragraph:
          "Designed an app for ecommerse app that sells clothes ranging from T-Shirts, Hoddies, Dress and Shoes",
        firstImage: require("../../../utility/first-pic (2).jpg"),
        secondImage: require("../../../utility/second-pic.jpg"),
        linkUrl1: "",
        linkUrl2: "",
        design: true,
      },
    ],
  };
}

render(){
 return (
   <div className="project">
     {this.state.collection.map(
       ({
         title,
         paragraph,
         firstImage,
         secondImage,
         id,
         dateOfPublish,
         technologies,
         linkUrl1,
         linkUrl2,
         design,
       }) => (
         <Card
           key={id}
           title={title}
           paragraph={paragraph}
           firstImage={firstImage}
           secondImage={secondImage}
           dateOfPublish={dateOfPublish}
           technologies={technologies}
           linkUrl1={linkUrl1}
           linkUrl2={linkUrl2}
           design={design}
         />
       )
     )}
     <Footer />
   </div>
 );
}
}

export default Project;