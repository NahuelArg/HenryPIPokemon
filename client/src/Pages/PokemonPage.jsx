import { useEffect, useState } from "react";
import { CardDetail } from "../components/CardDetail/CardDetail";
import Loader from "../components/Loader/Loader";
import { clearDetail, getPokemonById } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import IconLeft from "../components/Icons/IconLeft";

export const PokemonPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams(); 
  const pokemonId = id;
  const pokemonDetail = useSelector((state) => state.detailPokemon);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        dispatch(getPokemonById(pokemonId)); 
      } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
      } finally {
        setLoading(false);
      }
      return () => dispatch(clearDetail())
    };

    fetchData();
  }, [dispatch, pokemonId]); 

  return (
    <div className="container-page">
      <div className="card-pokemon container">
        {/* Botón para volver a la página principal */}
        <Link to="/home" className="btn-back"> <IconLeft/>Volver al Home</Link>
        
        {/* Contenido de la página */}
        {loading ? (
          <Loader />
        ) : (
          pokemonDetail && <CardDetail pokemon={pokemonDetail} />
        )}
      </div>
    </div>
  );
};
