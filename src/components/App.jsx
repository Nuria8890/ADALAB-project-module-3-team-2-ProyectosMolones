import "../styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  //Nombre proyecto
  const [nameProject, setnameProject] = useState("Elegant workspace");

  //Slogan
  const [slogan, setSlogan] = useState("Diseños exclusivos");

  //Repositorio
  const [repo, setRepo] = useState("GitHub link");

  //Demo
  const [demo, setDemo] = useState("Web link");

  //Tecnologias
  const [tech, setTech] = useState("React JS - HTML - CSS");

  //Descripcion
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorem mollitia. Ullam aliquid, impedit modi porro quis necessitatibus nemo voluptatum molestias quae est perspiciatis placeat sit quas doloremque error nobis."
  );

  //Nombre autora
  const [autor, setAutor] = useState("Emmelie Bjôrklund");

  //trabajo autora
  const [job, setJob] = useState("Full stack Developer");

  const handleValuesProyect = (value, id) => {
    if (id === "nameProject") {
      setnameProject(value);
    } else if (id === "slogan") {
      setSlogan(value);
    } else if (id === "repo") {
      setRepo(value);
    } else if (id === "demo") {
      setDemo(value);
    } else if (id === "technologies") {
      setTech(value);
    } else if (id === "desc") {
      setDescription(value);
    } else if (id === "autor") {
      setAutor(value);
    } else if (id === "job") {
      setJob(value);
    }
  };
  return (
    <>
      <div className="container">
        <Header />
        <Main
          nameProject={nameProject}
          slogan={slogan}
          repo={repo}
          demo={demo}
          tech={tech}
          description={description}
          autor={autor}
          job={job}
          onChangeInput={handleValuesProyect}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
