import "../styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {


  const [projectInfo, setProjectInfo] = useState({
    nameProject: "Elegant workspace",
    slogan: "Diseños Exclusivos",
    repo: "GitHub Link",
    demo: "Web Link",
    tech: "React JS - HTML - CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, dolorem mollitia.Ullam aliquid",
    autor: "Emmelie Bjôrklund",
    job: "Full stack Developer"


  })

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
          projectInfo={projectInfo}
          onChangeInput={handleValuesProyect}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
