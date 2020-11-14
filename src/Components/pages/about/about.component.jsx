import React from "react";
import { FaHtml5, FaCss3Alt,FaReact} from "react-icons/fa";
 import { DiJavascript1, DiFirebase } from "react-icons/di";
import Footer from "../../footer/footer.component"
import "./about.styles.scss";


const About = () => (
  <div className="about">
    <div className="container-top">
      <div className="row-top">
        <div className="coltop-1">
          <section class="home-intro">
            <div class="container">
              <h1>Lethukuthula Zikhali</h1>
              <h2>Software Developer</h2>

              <div class="footer-icons">
                <ul className="icons">
                  <li className="contact-icons">
                    <FaHtml5 size={55} color={"#f06529"} />
                  </li>
                  <li className="contact-icons">
                    <FaCss3Alt size={55} color={"#264de4"} />
                  </li>
                  <li className="contact-icons">
                    <FaReact size={55} color={"#61DBFB"} />
                  </li>
                  <li className="contact-icons">
                    <DiJavascript1 size={55} color={"#323330"} />
                  </li>
                  <li className="contact-icons">
                    <DiFirebase size={55} color={"#FFA611"} />
                  </li>
                </ul>

                <div className="parag">
                  <p>
                    I'm a self-taught web developer and UI/UX designer.
                    currently living in Pretoria Hatfield, Home town Mbazwana in
                    Kwazulu-Natal. I started learning coding in 
                    2017 using C# forms, then developed from there to MVC.NET using Entity Frameworks. and now i'm
                    deep diving into react.js and more of design. Planning on
                    continuing my journey with learning Phython and C++
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="coltop-2"></div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;

