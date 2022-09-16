export class Poke {
  constructor(data) {
    this.id = data.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    this.name = data.name
    this.url = data.url
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
  }

  get ListTemplate() {
    return /*html*/`
      <div class="d-flex align-items-center selectable" onclick="app.pokemonController.setActivePokemon('${this.url}')">
        <img src="${this.img}" alt="${this.name}" height="125">
        <p class="mb-0 ms-3"><b>${this.name}</b></p>
      </div>
    `
  }


}