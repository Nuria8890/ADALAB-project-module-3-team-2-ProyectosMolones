import "../styles/layout/Main.scss";
import PropTypes from "prop-types";
import Form from "./Form";
import Hero from "./Hero";
import Preview from "./Preview";

function Main({
  nameProject,
  slogan,
  repo,
  demo,
  tech,
  description,
  autor,
  job,
  onChangeInput,
}) {
  return (
    <main className="main">
      <Hero />

      <Preview
        nameProject={nameProject}
        slogan={slogan}
        repo={repo}
        demo={demo}
        tech={tech}
        description={description}
        autor={autor}
        job={job}
      />

      <Form onChangeInput={onChangeInput} />
    </main>
  );
}

export default Main;

Main.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  nameProject: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};
