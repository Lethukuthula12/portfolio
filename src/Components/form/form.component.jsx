import React from "react";
import emailjs from "emailjs-com"
import CustomeButton from "../custome-button/custome-button.component";


import "./form.styles.scss";


const Form =()=>{
  


  function SendEmail(e){
  e.preventDefault();

    emailjs
      .sendForm(
        "portfolio-contact",
        "template_luu2rgf",
        e.target,
        "user_Fje2EbYHwKTofCrpPmxw6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
       e.target.reset();
  }
 
  return (
    <div className="form">
      <form onSubmit={SendEmail}>
        <h2>Request CallBack</h2>
        <div className="form-control">
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter name" required />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter email" required />
        </div>
        <div className="form-control">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            required
          />
        </div>
        <div className="form-control">
          <label>Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Enter Your message here!"
            required
          />
        </div>
        <div>
          <CustomeButton className="form-button">Send Now!</CustomeButton>
        </div>
      </form>
    </div>
  );};

export default Form;