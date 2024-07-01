const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonControllers = require('../controllers/pokemon/getPokemons')
const typesControllers = require('../controllers/types/getTypes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemon', pokemonControllers.getPokemon)
router.get('/pokemon/name',pokemonControllers.getPokemonByName )
router.get('/pokemon/:idPokemon', pokemonControllers.getPokemonId)
router.post('/pokemon', pokemonControllers.postPokemons)
router.get('/types', typesControllers.getTypes)
module.exports = router;




/////////////////////////////////


/*
exports.getPokemonByName = async(req,res)=>{
  const { name } = req.query;
  try {
    const lowerCaseName = name.toLowerCase();
    const dbPokemon = await Pokemon.findOne({
      where:{name:{
        [Op.iLike]:`%${lowerCaseName}%`,
      }},
      include:[{model:Type,
        attributes:['name']
      }]
    })
    if(dbPokemon){
      const types = dbPokemon.types.map((type)=>type.name)
      const detailedPokemonDB = {
        ...dbPokemon.toJson(),
        types
      }
      return res.json(detailedPokemonDB)
    }
    const URL = `https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`;
   const response = await axios.get(`${URL}`)
   const pokemonData = response.data;
   const{
     id,
     name: pokemonName,
     sprites,
     stats,
     height,
     weight,
     types
   }=pokemonData
   const attack = stats.find((stat)=>stat.stat.name ==='attack').base_stat;
   const hp = stats.find((stat)=>stat.stat.name == "hp").base_stat;
   const defense = stats.find((stat)=>stat.stat.name == "defense").base_stat;
   const speed = stats.find((stat)=>stat.stat.name == "speed").base_stat;
   const pokemonTypes = types.map((typePokemon)=>typePokemon.type.name)
   const detailedpokemonApi ={
     id,
     name:pokemonName,
     image : sprites.other.dream_world.front_default,
     attack,
     hp,
     defense,
     speed,
     types:pokemonTypes,
     height,
     weight
   }
   res.status(200).json(detailedpokemonApi)
  
  } catch (error) {
   console.error("Error al obtener el Pokémon por nombre:", error.message);
   res.status(500).json({ message: "Error al obtener el Pokémon por nombre" });
 
   
  }
 }

   */