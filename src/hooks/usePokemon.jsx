import { useState } from "react"
import { reqPoke } from "../service/pokemon"


export const usePokemon = () => {
    const [pokemonInfo, setPokemonInfo] = useState([])

    const handleGetPokemonInfo = async (pokemon, e) => {
      e.preventDefault();
      const data = await reqPoke(pokemon);
      if (data) {
        setPokemonInfo(data);
      }
    }
  return {
    handleGetPokemonInfo,
    pokemonInfo
  }
}