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
      setProjectInfo({ ...projectInfo, nameProject: value });
    } else if (id === "slogan") {
      setProjectInfo({ ...projectInfo, slogan: value });
    } else if (id === "repo") {
      setProjectInfo({ ...projectInfo, repo: value });
    } else if (id === "demo") {
      setProjectInfo({ ...projectInfo, demo: value });
    } else if (id === "technologies") {
      setProjectInfo({ ...projectInfo, tech: value });
    } else if (id === "desc") {
      setProjectInfo({ ...projectInfo, description: value });
    } else if (id === "autor") {
      setProjectInfo({ ...projectInfo, autor: value });
    } else if (id === "job") {
      setProjectInfo({ ...projectInfo, job: value });
    }
  };

  const handleSubmitForm = () => {
    console.log("click");
  }

  return (
    <>
      <div className="container">
        <Header />
        <Main
          projectInfo={projectInfo}
          onChangeInput={handleValuesProyect}
          onSubmitForm={handleSubmitForm}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
