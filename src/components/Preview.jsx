import PropTypes from "prop-types";

function Preview({
  nameProject,
  slogan,
  repo,
  demo,
  tech,
  description,
  autor,
  job,
}) {
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
          <p className="card__job">{job}</p>
          <h3 className="card__name">{autor}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{nameProject}</h3>
          <p className="card__slogan">{slogan}</p>
          {/* <h3 className="card__descriptionTitle">{nameProject}</h3> */}
          <p className="card__description">{description}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{tech}</p>

            <a
              className="icon icon__www"
              href={demo}
              target="_blank"
              title="Haz click para ver el proyecto online"
            ></a>
            <a
              className="icon icon__github"
              href={repo}
              target="_blank"
              title="Haz click para ver el código del proyecto"
            ></a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Preview;

Preview.propTypes = {
  nameProject: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};
