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
    name: "Elegant workspace",
    slogan: "Diseños Exclusivos",
    repo: "GitHub Link",
    demo: "Web Link",
    technologies: "React JS - HTML - CSS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, dolorem mollitia.Ullam aliquid",
    autor: "Emmelie Bjôrklund",
    job: "Full stack Developer",
    image: imgProject,
    photo: imgAutor,
  });

  const [urlCard, setUrlCard] = useState("");

  const handleValuesProject = (value, id) => {
    if (id === "name") {
      setProjectInfo({ ...projectInfo, name: value });
    } else if (id === "slogan") {
      setProjectInfo({ ...projectInfo, slogan: value });
    } else if (id === "repo") {
      setProjectInfo({ ...projectInfo, repo: value });
    } else if (id === "demo") {
      setProjectInfo({ ...projectInfo, demo: value });
    } else if (id === "technologies") {
      setProjectInfo({ ...projectInfo, technologies: value });
    } else if (id === "desc") {
      setProjectInfo({ ...projectInfo, desc: value });
    } else if (id === "autor") {
      setProjectInfo({ ...projectInfo, autor: value });
    } else if (id === "job") {
      setProjectInfo({ ...projectInfo, job: value });
    } else if (id === "image") {
      setProjectInfo({ ...projectInfo, image: value });
    } else if (id === "photo") {
      setProjectInfo({ ...projectInfo, photo: value });
    }
  };

  const handleSubmitForm = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(projectInfo),
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => {
      setUrlCard(data.url);
      console.log(urlCard);
    });
  };

  return (
    <>
      <div className="container">
        <Header />
        <Main
          projectInfo={projectInfo}
          onChangeInput={handleValuesProject}
          onSubmitForm={handleSubmitForm}
          urlCard={urlCard}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
