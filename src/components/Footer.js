import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Footer.module.css";
import FooterImg from "../img/icono2.png";
const Footer = () => {
  return (
    <footer>
      <div className={classes["footer-container"]}>
        <div className={classes["icons-uno"]}>
          <button className="btn btn-primary">
            {" "}
            <FontAwesomeIcon icon={faLocationDot} size="2x" />{" "}
          </button>
          <h3>CONTACT US</h3>
          <p>401 Broadway, 24th Floor New York, NY</p>
          <p>10013</p>
        </div>
        <div className={classes["icons-dos"]}>
          <button className="btn btn-primary">
            {" "}
            <FontAwesomeIcon icon={faPhoneVolume} size="2x" />{" "}
          </button>
          <h3>LET'S TALK</h3>
          <p>Phone: 212.334.9753</p>
          <p>Fax: 212.334.9760</p>
        </div>
        <div className={classes["icons-tres"]}>
          <button className="btn btn-primary">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} size="2x" />{" "}
          </button>
          <h3>BOOKING INFO</h3>
          <p>info@yourdomain.com</p>
          <p>info@yourdomain.com</p>
        </div>
        <div className={classes["icons-cuatro"]}>
          <button className="btn btn-primary">
            {" "}
            <FontAwesomeIcon icon={faGlobe} size="2x" />{" "}
          </button>
          <h3>CAFE EVENT</h3>
          <p>Lorem ipsum is simply dummy text</p>
          <p>printing</p>
        </div>
        <div className={classes.linea}></div>
        <div className={classes.navigation}>
          <div className={classes.titulo}>
            <div className={classes["imagen-icono"]}>
              <img src={FooterImg} alt="icono" />
              <h2>LITHO</h2>
            </div>
            <div className={classes["lista-navegacion"]}>
              <ul>
                <li>ABOUT US</li>
                <li>MENU</li>
                <li>GALLERY</li>
                <li>CONTACT US</li>
              </ul>
              <div className={classes["parrafo-final"]}>
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
