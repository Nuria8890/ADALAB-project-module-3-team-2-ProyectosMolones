import "../styles/layout/Main.scss";
import PropTypes from "prop-types";

function Main(props) {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./">
          Ver proyectos
        </a>
      </section>

      <section className="preview">
        <div className="projectImage"></div>
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Personal project card
            </span>
          </h2>

          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job">{props.job}</p>
            <h3 className="card__name">{props.name}</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">{props.nameProyect}</h3>
            <p className="card__slogan">{props.slogan}</p>
            <h3 className="card__descriptionTitle">{props.nameProyect}</h3>
            <p className="card__description">{props.description}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{props.tech}</p>

              <a
                className="icon icon__www"
                href="#"
                title="Haz click para ver el proyecto online"
              >
                {props.demo}
              </a>
              <a
                className="icon icon__github"
                href="#"
                title="Haz click para ver el código del proyecto"
              >
                {props.repo}
              </a>
            </div>
          </div>
        </article>
      </section>
      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">
            Cuéntanos sobre el proyecto
          </legend>
          <input
            className="addForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
          />
          <input
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
          />
          <div className="addForm__2col">
            <input
              className="addForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
            />
            <input
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
            />
          </div>
          <input
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
          />
          <textarea
            className="addForm__input"
            type="text"
            name="desc"
            id="desc"
            placeholder="Descripción"
            rows="5"
          ></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input
            className="addForm__input"
            type="text"
            name="autor"
            id="autor"
            placeholder="Nombre"
          />
          <input
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
          />
        </fieldset>

        <fieldset className="addForm__group--upload">
          <label htmlFor="image" className="button">
            Subir foto del proyecto
          </label>
          <input
            className="addForm__hidden"
            type="file"
            name="image"
            id="image"
          />
          <label htmlFor="photo" className="button">
            Subir foto de la autora
          </label>
          <input
            className="addForm__hidden"
            type="file"
            name="photo"
            id="photo"
          />
          <button className="button--large">Guardar proyecto</button>
        </fieldset>
      </form>
    </main>
  );
}

export default Main;
Main.propTypes = {
  nameProyect: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};
