export const FilterBar = ({
  active,
  handleClose,
  handleCheckbox,
  checkboxState,
}) => {
  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className="row">
        <h6>Eliminar filtros & cerrar menu</h6>
        <button className="close-button" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-filterbar"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </button>
        <div className="filter-by-order">
          <span>Ordenar</span>

          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["asc"]}
              onChange={handleCheckbox}
              name="asc"
              id="asc"
            />
            <label htmlFor="asc">A-Z</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["desc"]}
              onChange={handleCheckbox}
              name="desc"
              id="desc"
            />
            <label htmlFor="desc">Z-A</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["api"]}
              onChange={handleCheckbox}
              name="api"
              id="api"
            />
            <label htmlFor="desc">API</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["created"]}
              onChange={handleCheckbox}
              name="created"
              id="created"
            />
            <label htmlFor="desc">DB</label>
          </div>
        </div>
        <div className="filter-by-type">
          <span>Tipo</span>

          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["grass"]}
              onChange={handleCheckbox}
              name="grass"
              id="grass"
            />
            <label htmlFor="grass">Planta</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["fire"]}
              onChange={handleCheckbox}
              name="fire"
              id="fire"
            />
            <label htmlFor="fire">Fuego</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["bug"]}
              onChange={handleCheckbox}
              name="bug"
              id="bug"
            />
            <label htmlFor="bug">Bicho</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["fairy"]}
              onChange={handleCheckbox}
              name="fairy"
              id="fairy"
            />
            <label htmlFor="fairy">Hada</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["dragon"]}
              onChange={handleCheckbox}
              name="dragon"
              id="dragon"
            />
            <label htmlFor="dragon">Dragón</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["shadow"]}
              onChange={handleCheckbox}
              name="shadow"
              id="shadow"
            />
            <label htmlFor="shadow">Fantasma</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["ground"]}
              onChange={handleCheckbox}
              name="ground"
              id="ground"
            />
            <label htmlFor="ground">Tierra</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["normal"]}
              onChange={handleCheckbox}
              name="normal"
              id="normal"
            />
            <label htmlFor="normal">Normal</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["psychic"]}
              onChange={handleCheckbox}
              name="psychic"
              id="psychic"
            />
            <label htmlFor="psychic">Psíquico</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["steel"]}
              onChange={handleCheckbox}
              name="steel"
              id="steel"
            />
            <label htmlFor="steel">Acero</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["dark"]}
              onChange={handleCheckbox}
              name="dark"
              id="dark"
            />
            <label htmlFor="dark">Siniestro</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["electric"]}
              onChange={handleCheckbox}
              name="electric"
              id="electric"
            />
            <label htmlFor="electric">Eléctrico</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["fighting"]}
              onChange={handleCheckbox}
              name="fighting"
              id="fighting"
            />
            <label htmlFor="fighting">Lucha</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["flying"]}
              onChange={handleCheckbox}
              name="flying"
              id="flying"
            />
            <label htmlFor="flying">Volador</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["ice"]}
              onChange={handleCheckbox}
              name="ice"
              id="ice"
            />
            <label htmlFor="ice">Hielo</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["poison"]}
              onChange={handleCheckbox}
              name="poison"
              id="poison"
            />
            <label htmlFor="poison">Veneno</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["rock"]}
              onChange={handleCheckbox}
              name="rock"
              id="rock"
            />
            <label htmlFor="rock">Roca</label>
          </div>
          <div className="group-type">
            <input
              type="checkbox"
              checked={checkboxState["water"]}
              onChange={handleCheckbox}
              name="water"
              id="water"
            />
            <label htmlFor="water">Agua</label>
          </div>
        </div>
      </div>
    </div>
  );
};
