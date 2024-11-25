import PropTypes from "prop-types";
import GetAvatar from "./GetAvatar";

function Form({ onChangeInput, onSubmitForm, updateAvatar }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value, event.target.id);
  };

  const handleChangeImageProject = (image) => {
    updateAvatar(image, "imageProject");
  };

  const handleChangeImageAutor = (image) => {
    updateAvatar(image, "imageAutor");
  };

  const handleSaveProyect = (event) => {
    event.preventDefault();
    onSubmitForm();
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
          id="nameProject"
          placeholder="Nombre del proyecto"
          onChange={handleChangeInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={handleChangeInput}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio (copia y pega la url)"
            onChange={handleChangeInput}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo (copia y pega la url)"
            onChange={handleChangeInput}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onChange={handleChangeInput}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="description"
          id="description"
          placeholder="Descripción"
          rows="5"
          onChange={handleChangeInput}
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
          onChange={handleChangeInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={handleChangeInput}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label htmlFor="image" className="button">
          <GetAvatar
            updateAvatar={handleChangeImageProject}
            text="Subir foto del proyecto"
          />
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="imageProject"
          id="imageProject"
        />

        <label htmlFor="photo" className="button">
          <GetAvatar
            updateAvatar={handleChangeImageAutor}
            text="Subir foto de la autora"
          />
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="imageAutor"
          id="imageAutor"
        />
        <button onClick={handleSaveProyect} className="button--large">
          Guardar proyecto
        </button>
      </fieldset>
    </form>
  );
}

export default Form;

Form.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};
