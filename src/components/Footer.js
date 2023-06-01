import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import FooterImg from "../img/icono2.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="icons-uno">
          <button className="btn btn-primary">
            {" "}
            <FontAwesomeIcon icon={faLocationDot} size="2x" />{" "}
          </button>
          <h3>CONTACT US</h3>
          <p>401 Broadway, 24th Floor New York, NY</p>
          <p>10013</p>
        </div>
        <div className="icons-dos">
          <button className="btn btn-primary">
            {" "}
            <FontAwesomeIcon icon={faPhoneVolume} size="2x" />{" "}
          </button>
          <h3>LET'S TALK</h3>
          <p>Phone: 212.334.9753</p>
          <p>Fax: 212.334.9760</p>
        </div>
        <div className="icons-tres">
          <button className="btn btn-primary">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} size="2x" />{" "}
          </button>
          <h3>BOOKING INFO</h3>
          <p>info@yourdomain.com</p>
          <p>info@yourdomain.com</p>
        </div>
        <div className="icons-cuatro">
          <button className="btn btn-primary">
            {" "}
            <FontAwesomeIcon icon={faGlobe} size="2x" />{" "}
          </button>
          <h3>CAFE EVENT</h3>
          <p>Lorem ipsum is simply dummy text</p>
          <p>printing</p>
        </div>
        <div className="linea"></div>
        <div className="navigation">
          <div className="titulo">
            <div className="imagen-icono">
              <img src={FooterImg} alt="icono" />
              <h2>LITHO</h2>
            </div>
            <div className="lista-navegacion">
              <ul>
                <li>ABOUT US</li>
                <li>MENU</li>
                <li>GALLERY</li>
                <li>CONTACT US</li>
              </ul>
              <div className="parrafo-final">
              <p>
                © 2023 LITHO IS PROUDLY POWERED BY <span> <a href="https://codespaceacademy.com/">CODE SPACE</a></span>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
