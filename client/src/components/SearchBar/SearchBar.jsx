import { useState } from "react";
import styles from "./SearchBar.module.css"

export const SearchBar = ({onSearch}) => {
  const [namePokemon, setNamePokemon] = useState("")

  const handleChange = (event) => {
    setNamePokemon(event.target.value);
  };
  

  return (
    <div className={styles.flex}>
      <div className="form-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon-search"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="search"
          name="valueSearch"
          onChange={handleChange}
          placeholder="Buscar nombre de pokemon"
        />
      </div>

      <button onClick={() => onSearch(namePokemon)} type="submit" className="btn-search">Buscar</button>
    </div>
  );
};

export default SearchBar;
