import "../styles/layout/Main.scss";
import PropTypes from "prop-types";
import Form from "./Form";
import Hero from "./Hero";
import Preview from "./Preview";

function Main(props) {
  return (
    <main className="main">
      <Hero />

      <Preview
        nameProject={props.nameProject}
        slogan={props.slogan}
        repo={props.repo}
        demo={props.demo}
        tech={props.tech}
        description={props.description}
        autor={props.autor}
        job={props.job}
      />

      <Form onChangeInput={props.onChangeInput} />
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
