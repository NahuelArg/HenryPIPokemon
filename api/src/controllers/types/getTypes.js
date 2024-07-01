const {Type} = require("../../db")
const axios = require('axios');
const URL = "https://pokeapi.co/api/v2/type?limit=21";
exports.getTypes = async (req,res)=>{
    try {
        const existingTypes = await Type.findAll();
        if(existingTypes.length === 0){ 
        const response = await axios.get(URL);
        const typesFromApi = response.data.results.map((type) => ({
            name: type.name,
          }));
          const createdTypes = await Type.bulkCreate(typesFromApi)
        return res.json(createdTypes)
    }else{
        return res.json(existingTypes)
    }
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los tipos de Pokémon" });
    }
}