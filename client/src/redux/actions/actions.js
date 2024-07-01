import axios from "axios";

// Constantes de tipos de acciones
export const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";
export const GET_POKEMONS_FAILURE = "GET_POKEMONS_FAILURE";
export const GET_POKEMON_BY_NAME_SUCCESS = "GET_POKEMON_BY_NAME_SUCCESS";
export const GET_POKEMON_BY_NAME_FAILURE = "GET_POKEMON_BY_NAME_FAILURE";
export const GET_POKEMON_BY_ID_SUCCESS = "GET_POKEMON_BY_ID_SUCCESS";
export const GET_POKEMON_BY_ID_FAILURE = "GET_POKEMON_BY_ID_FAILURE";
export const CLEAN_POKEMON_BY_ID = "CLEAN_POKEMON_BY_ID";
export const CREATE_POKEMON_SUCCESS = "CREATE_POKEMON_SUCCESS";
export const CREATE_POKEMON_FAILURE = "CREATE_POKEMON_FAILURE";
export const GET_TYPES_SUCCESS = "GET_TYPES_SUCCESS";
export const GET_TYPES_FAILURE = "GET_TYPES_FAILURE";

//Filter

export const FILTER_POKEMONS = "FILTER_POKEMONS";
export const SORT_POKEMONS = "SORT_POKEMONS";
export const FILTER_BY_API = "FILTER_BY_API";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const CLEAR_FILTERS = "CLEAR_FILTERS";


export const getPokemons = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/pokemon`
    );
    dispatch({
      type: GET_POKEMONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POKEMONS_FAILURE,
      payload: error.message,
    });
  }
};
export const getPokemonByName = (name) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/pokemon/name?pokemonName=${name}`
    );
    dispatch({
      type: GET_POKEMON_BY_NAME_SUCCESS,
      payload: {
        pokemon: response.data,
        foundPokemonName: name,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_POKEMON_BY_NAME_FAILURE,
      payload: error.message,
    });
  }
};
export const getPokemonById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/pokemon/${id}`);
    dispatch({
      type: GET_POKEMON_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POKEMON_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};
export const createPokemon = (pokemonData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/pokemon",
      pokemonData
    );
    dispatch({
      type: CREATE_POKEMON_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_POKEMON_FAILURE,
      payload: error.message.split(' '),
    });
  }
};
export const getTypes = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/types");
    dispatch({
      type: GET_TYPES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TYPES_FAILURE,
      payload: error.message,
    });
  }
};
export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});
export const clearDetail = () => ({
  type: CLEAN_POKEMON_BY_ID,
});
export const filterPokemons = (selectedTypes) => ({
  type: FILTER_POKEMONS,
  payload: selectedTypes,
});

export const sortPokemons = (order) => ({
  type: SORT_POKEMONS,
  payload: order,
});

export const filterByAPI = () => ({
  type: FILTER_BY_API,
});

export const filterByCreated = () => ({
  type: FILTER_BY_CREATED,
});