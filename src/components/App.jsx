import "../styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  //Nombre proyecto
  const [nameProyect, setNameProyect] = useState("Elegant workspace");

  const handleNameProyect = (event) => {
    setNameProyect(event.target.value);
    
  };

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

  return (
    <>
      <div className="container">
        <Header />
        <Main nameProyect={nameProyect} />
      </div>
      <Footer />

      {/* <header class="header">
      <a href="./">
        <div class="header_left">
          <i class="fa-solid fa-cat fa-2xl header_left-icon" aria-hidden="true"></i>
          <h1 class="header_left-text">Proyectos molones</h1>
        </div>
      </a>
      <img class="header_logo"
        src="./images/adalab.png"
        alt="Logo Adalab">
    </header>
    <main class="main">
      <section class="intro">
        <h1 class="intro_title">Proyectos molones</h1>
        <p class="intro_text">Escaparate en línea para recoger ideas a través de la tecnología.</p>
      </section>
      <a class="linkProject" href="#/">
        <button class="linkProject_project-btn">Ver Proyectos</button> <!-- TODO - - >
      </a>
      <section class="preview">
        <div class="preview_image" style="background-image: url('./images/project.jpg');"></div>
        <article class="preview_autor">
          <section class="infoProject">
            <div class="infoProject_container">
              <hr class="infoProject_container-line1">
              <p class="infoProject_container-subtitle">Personal Project Card</p>
              <hr class="infoProject_container-line2">
            </div>
            <h2 class="infoProject_title">Elegant Workspace</h2>
            <p class="infoProject_slogan">Diseños Exclusivos</p>
            <p class="infoProject_desc">Gestión de proyectos en línea, diseñado para simplificar y agilizar tu
              trabajo como programadora. Con solo crear una tarjeta para cada proyecto, podrás organizarlos de manera
              eficiente. ¡Optimiza tu productividad y alcanza tus metas de manera efectiva con nosotras!</p>
            <section class="technologies">
              <p class="technologies_text">React JS - HTML - CSS</p><button src="" target="_blank"
                class="technologies_icon"><i class="fa-solid fa-globe technologies_icon-img"
                  aria-hidden="true"></i></button><button src="" target="_blank" class="technologies_icon"><i
                  class="fa-brands fa-github technologies_icon-img" aria-hidden="true"></i></button>
            </section>
          </section>
          <section class="infoAutor">
            <div class="infoAutor_image" style="background-image: url(&quot;/assets/avatar-a91e8c67.png&quot;);"></div>
            <p class="infoAutor_job">Full Stack Developer</p>
            <p class="infoAutor_name">Emmelie Björklund</p><button class="btn"></button>
          </section>
        </article>
      </section>
      <section class="form"><i class="fa-regular fa-trash-can fa-2xl form_trash" aria-hidden="true"></i>
        <h2 class="form_title">Información</h2>
        <section class="form_askInfo">
          <div class="form_askInfo_container">
            <p class="form_askInfo_container-subtitle">Cuéntanos sobre el proyecto</p>
            <hr class="form_askInfo-line">
          </div>
        </section>
        <fieldset class="form_project"><input class="form_project-input" type="text" placeholder="Nombre del proyecto *"
            name="name" id="name" required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" name="slogan" id="slogan"
            placeholder="Slogan *" required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" name="repo" id="repo" placeholder="Repo *"
            required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" placeholder="Demo *" name="demo" id="demo"
            required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" placeholder="Tecnologías *"
            name="technologies" id="technologies" required="" value="">
          <p class="error"></p><textarea maxlength="300" class="form_project-textarea" type="text"
            placeholder="Descripción * (Máx. 300 caracteres)" name="desc" id="desc" required=""></textarea>
          <p class="error"></p>
        </fieldset>
        <section class="form_askInfo">
          <p class="form_askInfo-autor">Cuéntanos sobre la autora</p>
          <hr class="form_askInfo-line">
        </section>
        <fieldset class="form_project"><input class="form_project-input" type="text" placeholder="Nombre *" name="autor"
            id="autor" required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" placeholder="Trabajo *" name="job" id="job"
            required="" value="">
          <p class="error"></p>
        </fieldset>
        <section class="form_btn">
          <div class="form_btn-first"><label class="form_btn-first-upload">Subir foto del proyecto<input type="file"
                style="display: none;"></label><label class="form_btn-first-upload">Subir foto de la autora<input
                type="file" style="display: none;"></label></div>
          <p class="error"></p>
          <p class="error"></p>
          <div><button class="form_btn-create">Crear Tarjeta</button></div>
        </section>
        <section class="form_card hidden"><span class="form_card-msg"> La tarjeta ha sido creada:</span><a href=""
            class="form_card-link" target="_blank" rel="noreferrer"></a></section>
      </section>
    </main>
    <footer class="footer"><img class="footer_img"
        src="./images/adalab.png"
        alt=""></footer> */}
    </>
  );
}

export default App;
