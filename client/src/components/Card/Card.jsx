import { Link } from "react-router-dom";


export const Card = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <div className="card-img">
        <img src={pokemon?.image} alt={`Pokemon ${pokemon?.name}`} />
      </div>
      <div className="card-info">
        <span className="pokemon-id">N° {pokemon?.externalId ? pokemon?.externalId +' BD' : pokemon?.id}</span>
        <h3>{pokemon.name}</h3>
        <div className='card-types'>
          {pokemon.types &&
            pokemon.types.map((type) => (
              <span key={type} className={type}>
                {type}
              </span>
            ))}
        </div>
      </div>
    </Link>
  );
};
