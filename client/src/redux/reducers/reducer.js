import { act } from 'react';
import {
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_FAILURE,
    GET_POKEMON_BY_NAME_SUCCESS,
    GET_POKEMON_BY_NAME_FAILURE,
    GET_POKEMON_BY_ID_SUCCESS,
    GET_POKEMON_BY_ID_FAILURE,
    CLEAN_POKEMON_BY_ID,
    CREATE_POKEMON_SUCCESS,
    CREATE_POKEMON_FAILURE,
    GET_TYPES_SUCCESS,
    GET_TYPES_FAILURE,
    FILTER_POKEMONS,
    SORT_POKEMONS,
    CLEAR_FILTERS,
    FILTER_BY_API,
    FILTER_BY_CREATED,
  } from '../actions/actions'
const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    filteredPokemons: [],
    createdPokemons: [],
    detailPokemon: {},
    foundPokemonName: null,
    error: null,
    filterType: null,
  
};
const rootReducer = (state = initialState, action)=>{
    const{type, payload} = action
switch (action.type) {
    case GET_POKEMONS_SUCCESS:
        return {
          ...state,
          pokemons: [...payload.created, ...payload.api],
          allPokemons: payload.api,
          createdPokemons: payload.created,
          error: null,
        };
     case GET_POKEMONS_FAILURE:
            return {
              ...state,
              error: payload,
            };
            case GET_POKEMON_BY_NAME_SUCCESS:
                return {
                  ...state,
                  pokemons: [payload.pokemon],
                  allPokemons: [payload.pokemon],
                  foundPokemonName: payload.foundPokemonName,
                  error: null,
                };
                case GET_POKEMON_BY_NAME_FAILURE:
                    return {
                      ...state,
                      error: payload,
                    };
                    case GET_POKEMON_BY_ID_SUCCESS:
                        return {
                          ...state,
                          detailPokemon: payload,
                          error: null,
                        };case GET_POKEMON_BY_ID_FAILURE:
                        return {
                          ...state,
                          error: payload,
                        };
                      case CLEAN_POKEMON_BY_ID:
                        return {
                          ...state,
                          detailPokemon: {},
                          error: null,
                        };case CLEAN_POKEMON_BY_ID:
                        return {
                          ...state,
                          detailPokemon: {},
                          error: null,
                        };
                      case CREATE_POKEMON_SUCCESS:
                        return {
                          ...state,
                          pokemons: [...state.pokemons, payload],
                          error: null,
                        };
                      case CREATE_POKEMON_FAILURE:
                        return {
                          ...state,
                          error: payload,
                        };
                      case GET_TYPES_SUCCESS:
                        return {
                          ...state,
                          types: payload,
                          error: null,
                        };
                      case GET_TYPES_FAILURE:
                        return {
                          ...state,
                          error: payload,
                        };
                      case FILTER_BY_API:
                        return {
                          ...state,
                          filteredPokemons: state.allPokemons,
                          filterType: "api",
                        };
                      case FILTER_BY_CREATED:
                        return {
                          ...state,
                          filteredPokemons: state.createdPokemons,
                          filterType: "created",
                        };
                      case FILTER_POKEMONS:
                        if (state.filteredPokemons.length > 0) {
                          return {
                            ...state,
                            filteredPokemons: state.filteredPokemons.filter((pokemon) =>
                              pokemon.types.includes(payload)
                            ),
                          };
                        } else {
                          return {
                            ...state,
                            filteredPokemons: state.pokemons.filter((pokemon) =>
                              pokemon.types.includes(payload)
                            ),
                          };
                        }
                      case SORT_POKEMONS:
                        if (state.filteredPokemons.length > 0) {
                          return {
                            ...state,
                            filteredPokemons: [...state.filteredPokemons].sort((a, b) => {
                              if (payload === "asc") {
                                return a.name.localeCompare(b.name);
                              } else if (payload === "desc") {
                                return b.name.localeCompare(a.name);
                              } else {
                                return state.pokemons;
                              }
                            }),
                          };
                        } else {
                            return {
                              ...state,
                              filteredPokemons: [...state.pokemons].sort((a, b) => {
                                if (payload === "asc") {
                                  return a.name.localeCompare(b.name);
                                } else if (payload === "desc") {
                                  return b.name.localeCompare(a.name);
                                } else {
                                  return state.pokemons;
                                }
                              }),
                            };
                          }
                        case CLEAR_FILTERS:
                          return {
                            ...state,
                            pokemons: state.pokemons,
                            filteredPokemons: [],
                            filterType: null,
                          };
                    

          
   

    default:
        return{...state};
}
}
export default rootReducer


