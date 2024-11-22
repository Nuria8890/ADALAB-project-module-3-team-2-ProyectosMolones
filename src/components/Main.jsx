import "../styles/layout/Main.scss";
import PropTypes from "prop-types";
import Form from "./Form";
import Hero from "./Hero";
import Preview from "./Preview";

function Main({
  projectInfo,
  onChangeInput,
}) {
  return (
    <main className="main">
      <Hero />

      <Preview
        projectInfo={projectInfo}
      />

      <Form onChangeInput={onChangeInput} />
    </main>
  );
}

export default Main;

Main.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  projectInfo: PropTypes.object.isRequired
};
