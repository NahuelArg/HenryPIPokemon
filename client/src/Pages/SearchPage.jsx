import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardDetail } from "../components/CardDetail/CardDetail";
import { getPokemonByName } from "../redux/actions/actions"; // Importa tus funciones de Redux

export const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const foundPokemon = useSelector((state) => state.pokemons[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const startTime = Date.now();
       dispatch(getPokemonByName(foundPokemon));

        const endTime = Date.now(); // Tiempo final después de llamar a la función de Redux
        const serverResponseTime = endTime - startTime;
        console.log("Tiempo de respuesta del servidor:", serverResponseTime);

      } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, foundPokemon]); // useEffect se ejecuta solo una vez después de que el componente se monta

  return (
    <div className="container-page">
      <div className="card-pokemon container">
        {loading ? (
          // Muestra el loader mientras se están cargando los datos
          <div>Loading...</div>
        ) : (
          // Muestra el detalle del Pokémon si ya se han cargado los datos
          foundPokemon && <CardDetail pokemon={foundPokemon} />
        )}
      </div>
    </div>
  );
};
