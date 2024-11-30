import "../styles/layout/Landing.scss";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import adalab from "../images/adalab.png";
function Landing() {
  return (
    <>
      <div className="logo-adalab">
        <img className="logoSponsor" src={adalab} alt="Logo Adalab" />
      </div>
      <section className="container-landing">
        <h1 className="title-landing">4Code</h1>
        <p className="subtitle">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <div className="button btn">
          <Link to="/main">
            <a href="">Comenzar</a>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Landing;
