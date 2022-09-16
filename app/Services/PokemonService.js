import { appState } from "../AppState.js"
import { Poke } from "../Models/Poke.js"
import { Pokemon } from "../Models/Pokemon.js"
import { PokemonServer } from "./AxiosService.js"

class PokemonService {
  async setActivePoke(url) {
    const res = await PokemonServer.get(url)
    appState.activePokemon = new Pokemon(res.data)
  }

  async getPokes() {

    const res = await PokemonServer.get('api/v2/pokemon',{
      params:{
        offset: 20
      }
    })

    appState.pokes = res.data.results.map(p => new Poke(p))


  }
}


export const pokemonService = new PokemonService()