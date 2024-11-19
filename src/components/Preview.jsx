import PropTypes from "prop-types";

function Preview(props) {
  return (
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
  );
}

export default Preview;

Preview.propTypes = {
  nameProyect: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};
