import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
} from "../redux/actions/actions";

import { PokemonList } from "../components/PokemonList";
import Loader from "../components/Loader/Loader";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons) || [];
  const filtered = useSelector((state) => state.filteredPokemons) || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
      dispatch(getPokemons());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <PokemonList
          pokemons={filtered.length > 0 ? filtered : pokemons}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};
