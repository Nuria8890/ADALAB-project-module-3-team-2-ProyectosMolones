import "../styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  //Nombre proyecto
  const [nameProyect, setNameProyect] = useState("Elegant workspace");

  //Slogan
  const [slogan, setSlogan] = useState("Diseños exclusivos");

  //Repositorio
  const [repo, setRepo] = useState("GitHub link");

  //Demo
  const [demo, setDemo] = useState("Web link");

  //Tecnologias
  const [tech, setTech] = useState("React JS - HTML - CSS");

  //Descripcion
  const [description, setDescription] = useState("lorem");

  //Nombre autora
  const [name, setName] = useState("Emmelie Bjôrklund");

  //trabajo autora
  const [job, setJob] = useState("Full stack Developer");

  const handleValuesProyect = (value, id) => {
    setNameProyect(value);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Main nameProyect={nameProyect} onChangeInput={handleValuesProyect} />
      </div>
      <Footer />
    </>
  );
}

export default App;
