import { appState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";
import { setHTML } from "../Utils/Writer.js";


function drawPokes() {
  let template = ''
  appState.pokes.forEach(p => template += p.ListTemplate)
  setHTML('pokes', template)
}

function drawPokemon() {
  if (!appState.activePokemon) { return }
  setHTML('active', appState.activePokemon.ActiveTemplate)
}

export class PokemonController {

  constructor() {
    console.log('working');
    this.getPokes()

    appState.on('pokes', drawPokes)
    appState.on('activePokemon', drawPokemon)

  }

  async getPokes() {
    try {
      await pokemonService.getPokes()
    } catch (error) {
      console.error('[getPokes]', error);
    }
  }

  async setActivePokemon(url) {
    try {
      await pokemonService.setActivePoke(url)
    } catch (error) {
      console.error('[active]', error)
    }
  }

}
