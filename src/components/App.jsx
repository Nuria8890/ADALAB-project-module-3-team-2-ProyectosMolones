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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, dolorem mollitia.Ullam aliquid",
    autor: "Emmelie Bjôrklund",
    job: "Full stack Developer",
  });

  const [projectImages, setProjectImages] = useState({
    imageProject: "",
    imageAutor: "",
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
    }
  };

  const handleUpdateImages = (img, id) => {
    if (id === "imageProject") {
      setProjectImages({ ...projectImages, imageProject: img });
    } else if (id === "imageAutor") {
      setProjectImages({ ...projectImages, imageAutor: img });
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
          projectImages={projectImages}
          updateAvatar={handleUpdateImages}
          onChangeInput={handleValuesProject}
          onSubmitForm={handleSubmitForm}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
