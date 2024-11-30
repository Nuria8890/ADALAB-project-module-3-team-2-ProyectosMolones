import "../styles/layout/Landing.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <Header />
      <h1>4Code</h1>
      <h4>Escaparate en línea para recoger ideas a través de la tecnología</h4>
      <Link to="/main">
        <a href="">Comenzar</a>
      </Link>
      <Footer />
    </>
  );
}

export default Landing;
