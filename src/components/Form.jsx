import PropTypes from "prop-types";

function Form(props) {
  const handleChangeInput = (event) => {
    props.onChangeInput(event.target.value, event.target.id);
  };
  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name-proyect"
          placeholder="Nombre del proyecto"
          onChange={handleChangeInput}
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
  );
}

export default Form;

Form.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  formNameProyect: PropTypes.string.isRequired,
  formSlogan: PropTypes.string.isRequired,
  formRepo: PropTypes.string.isRequired,
  formDemo: PropTypes.string.isRequired,
  formTech: PropTypes.string.isRequired,
  formDescription: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  formJob: PropTypes.string.isRequired,
};