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