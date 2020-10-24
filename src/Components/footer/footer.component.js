import React from "react"
import {
  FaFacebookF,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import "./footer.styles.scss"

const Footer=()=>{
const date = new Date();
let dt= date.getFullYear();

return (
  <div className="footer">
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          C<span>AP</span>
        </h3>

        <p class="footer-company-name">Copyright © {dt}</p>
      </div>

      <div class="footer-center">
        <table>
          <row>
            <td>
              <FaCode className="icon" />
            </td>
            <td>
              <p>
                <span>LET'S Start Your Project</span>
              </p>
            </td>
          </row>
          <row>
            <td>
              {" "}
              <FaPhoneAlt className="icon" />
            </td>
            <td>
              <p>+27711819544</p>
            </td>
          </row>
          <row>
            <td>
              <FaEnvelope className="icon" />
            </td>
            <td>
              <p>
                <a href="mailto:LethuFZikhali@gmail.com">
                  LethuFZikhali@gmail.com
                </a>
              </p>
            </td>
          </row>
        </table>

      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>Favourite quote</span>
          “Simple can be harder than complex: You have to work hard to get your
          thinking clean to make it simple. But it’s worth it in the end because
          once you get there, you can move mountains.” ― Steve Jobs
        </p>

        <div class="footer-icons">
          <a href="https://www.facebook.com/Lethuk2/">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/lethufl">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/mr-lethukuthula-zikhali-a37801137/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Lethukuthula12?tab=repositories">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  </div>
);


}
export default Footer;