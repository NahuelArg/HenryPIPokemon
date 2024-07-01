

export const CardDetail = ({ pokemon }) => {
    

    return (
        <main className="container main-pokemon">
                <div className="content">
                    <div className="header-main-pokemon">
                        <span className="number-pokemon">#{pokemon?.externalId ? pokemon?.externalId : pokemon?.id}</span>
                        <div className="container-img-pokemon">
                            <img src={pokemon?.image} alt={`Pokemon ${pokemon?.name}`} />
                        </div>

                        <div className="container-info-pokemon">
                            <h1>{pokemon?.name}</h1>
                            <div className="card-types info-pokemon-type">
                                {pokemon?.types?.map((type) => (
                                    <span key={type} className={`${type}`}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                            <div className="info-pokemon">
                                <div className="group-info">
                                    <p>Altura</p>
                                    <span>{pokemon?.height}</span>
                                </div>
                                <div className="group-info">
                                    <p>Peso</p>
                                    <span>{pokemon?.weight}KG</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-stats">
                        <h1>Estadísticas</h1>
                        <div className="stats">
                            <div className="stat-group">
                                <span>Hp</span>
                                <div className="progress-bar"></div>
                                <span className="counter-stat">{pokemon?.life}</span>
                            </div>
                            <div className="stat-group">
                                <span>Attack</span>
                                <div className="progress-bar"></div>
                                <span className="counter-stat">{pokemon?.attack}</span>
                            </div>
                            <div className="stat-group">
                                <span>Defense</span>
                                <div className="progress-bar"></div>
                                <span className="counter-stat">{pokemon?.defense}</span>
                            </div>
                            <div className="stat-group">
                                <span>Speed</span>
                                <div className="progress-bar"></div>
                                <span className="counter-stat">{pokemon?.speed}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    );
};
