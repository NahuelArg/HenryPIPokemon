import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/actions/actions";
import validation from "./validation";
import AlertSuccess from "../Alert/AlertSuccess";

const {
  formContainer,
  formGroup,
  formControl,
  formGroupImage,
  colum,
  row,
  groupImage,
  showImage,
  addImageLabel,
  hidden,
  btnDelete,
} = styles;

export const Form = () => {
  const [name, setName] = useState("");
  const [life, setLife] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [types, setTypes] = useState([]);
  const [errors, setErrors] = useState({});
  const [imagen, setImagen] = useState(null);

  const [alertSuccess, setAlertSuccess] = useState(false);
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleAlertClose = () => {
    setAlertSuccess(false);
  };

  function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const data = {
        name,
        image: imagen,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
        types,
      };

      validation(data, errors, setErrors);

      if (Object.keys(errors).length === 0) {
        dispatch(createPokemon(data));
        setAlertSuccess(true);
      } else {
        console.log("Formulario con errores:", errors);
        setAlertSuccess(false);
      }
    } catch (error) {
      console.error("Ocurrio un error al enviar: " + error);
      setAlertSuccess(false);
    }
  }

  const handleSelected = (ev) => {
    const selectedType = ev.target.value;
    if (!types.includes(selectedType)) {
      setTypes([...types, selectedType]);
    } else {
      setTypes(types.filter((type) => type !== selectedType));
    }
  };

  const handleImageUpload = (event) => {
    const files = event.target.files[0];
    if(files){ try {
      const imageUrl = URL.createObjectURL(files);
      setImagen(imageUrl);
    } catch (error) {
      console.error("Error al crear la URL del objeto:", error);
    }
  };}
    

  return (
    <div className={formContainer}>
      {alertSuccess && !error && <AlertSuccess onClose={handleAlertClose}/>}

      <h1>Crea tu pokemon</h1>
      <form onSubmit={handleSubmit}>
        <div className={formGroupImage}>
          <label htmlFor="Imagen">Imagen</label>
          <div className={groupImage}>
            {imagen && (
              <div className={showImage}>
                <img src={imagen} alt="Imagen del pokemon" />
                <button onClick={() => setImagen(null)} className={btnDelete}>
                  borrar
                </button>
              </div>
            )}
            <label className={addImageLabel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              Agregar imagen
              <input
                type="file"
                onChange={handleImageUpload}
                className={hidden}
              />
            </label>
          </div>
        </div>
        <div className={row}>
          <div className={colum}>
            <div className={formGroup}>
              <label htmlFor="Nombre">Nombre</label>
              <input
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                className={formControl}
                type="text"
              />
              {errors.name && <div className={error}>{errors.name}</div>}{" "}
              {/* Muestra el error si existe */}
            </div>
            <div className={formGroup}>
              <label htmlFor="Vida">Vida</label>
              <input
                value={life}
                onChange={(ev) => setLife(ev.target.value)}
                className={formControl}
                type="text"
              />
              {errors.life && <div className={error}>{errors.life}</div>}
            </div>
            <div className={formGroup}>
              <label htmlFor="Ataque">Ataque</label>
              <input
                value={attack}
                onChange={(ev) => setAttack(ev.target.value)}
                className={formControl}
                type="text"
              />
              {errors.attack && <div className={error}>{errors.attack}</div>}
            </div>
            <div className={formGroup}>
              <label htmlFor="Tipo">Tipo</label>
              <select
                className={formControl}
                value={types}
                onChange={handleSelected}
                multiple
              >
                {allTypes &&
                  allTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
              </select>
              {errors.types && <div className={error}>{errors.types}</div>}
            </div>
          </div>
          <div className={colum}>
            <div className={formGroup}>
              <label htmlFor="Defensa">Defensa</label>
              <input
                value={defense}
                onChange={(ev) => setDefense(ev.target.value)}
                className={formControl}
                type="text"
              />
              {errors.defense && <div className={error}>{errors.defense}</div>}
            </div>
            <div className={formGroup}>
              <label htmlFor="Velocidad">Velocidad</label>
              <input
                value={speed}
                onChange={(ev) => setSpeed(ev.target.value)}
                className={formControl}
                type="text"
              />
              {errors.speed && <div className={error}>{errors.speed}</div>}
            </div>
            <div className={formGroup}>
              <label htmlFor="Altura">Altura</label>
              <input
                value={height}
                onChange={(ev) => setHeight(ev.target.value)}
                className={formControl}
                type="text"
              />
              {errors.height && <div className={error}>{errors.height}</div>}
            </div>
            <div className={formGroup}>
              <label htmlFor="Peso">Peso</label>
              <input
                value={weight}
                onChange={(ev) => setWeight(ev.target.value)}
                className={formControl}
                type="text"
              />
              {errors.weight && <div className={error}>{errors.weight}</div>}
            </div>
          </div>
        </div>
        <div className={formGroup}>
          <button className="btn-search">Crear</button>
        </div>
      </form>
    </div>
  );
};
