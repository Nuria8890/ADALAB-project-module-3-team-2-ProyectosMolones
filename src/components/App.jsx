import "../styles/App.scss";
import imgProject from "../images/apuntes-tablet.jpg";
import imgAutor from "../images/mujer_tech2.png";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
// import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [projectInfo, setProjectInfo] = useState({
    nameProject: "Elegant workspace",
    slogan: "Diseños Exclusivos",
    repo: "GitHub Link",
    demo: "Web Link",
    tech: "React JS - HTML - CSS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, dolorem mollitia.Ullam aliquid",
    autor: "Emmelie Bjôrklund",
    job: "Full stack Developer",
    imageProject: imgProject,
    imageAutor: imgAutor,
  });

  const handleValuesProject = (value, id) => {
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
    } else if (id === "description") {
      setProjectInfo({ ...projectInfo, desc: value });
    } else if (id === "autor") {
      setProjectInfo({ ...projectInfo, autor: value });
    } else if (id === "job") {
      setProjectInfo({ ...projectInfo, job: value });
    } else if (id === "imageProject") {
      setProjectInfo({ ...projectInfo, imageProject: value });
    } else if (id === "imageAutor") {
      setProjectInfo({ ...projectInfo, imageAutor: value });
    }
  };

  const handleSubmitForm = () => {
    console.log("click");
  };

  return (
    <>
      <div className="container">
        <Header />
        <Main
          projectInfo={projectInfo}
          onChangeInput={handleValuesProject}
          onSubmitForm={handleSubmitForm}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
