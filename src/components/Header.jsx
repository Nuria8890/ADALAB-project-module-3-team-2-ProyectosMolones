import laptopCodeSolid from "../images/laptop-code-solid.svg";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <img
          className="header__companyLogo"
          src={laptopCodeSolid}
          alt="Logo proyectos molones"
        />
        <h1 className="header__title">Proyectos molones</h1>
      </a>
     <Logo/>
    </header>
  );
}

export default Header;
