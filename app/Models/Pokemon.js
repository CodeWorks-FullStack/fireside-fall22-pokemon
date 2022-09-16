export class Pokemon {
  constructor(data) {
    // TODO
    this.name = data.name
    this.id = data.id
    this.moves = data.moves
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`

    this.sprites = data.sprites
  }


  get ActiveTemplate() {
    return /*html*/`
      <div class="card">
        <img src="${this.img}" alt="">
        <div class="card-body">
        <div>
          <h3>${this.name}</h3>
        </div>
          <div class="d-flex flex-wrap">
            ${this.SpritesTemplate}
          </div>
          <div class="moves">
            ${this.MovesListTemplate}
          </div>
        </div>  
      </div>
    `
  }


  get MovesListTemplate() {
    let template = '<ul class="list-group">'

    this.moves.slice(0, 5).forEach(m => {
      template += /*html*/`
        <li class="list-group-item">${m.move.name}</li>
      `
    })

    template += '</ul>'


    return template
  }



  get SpritesTemplate() {
    let template = ''
    for (const key in this.sprites) {
      let sprite = this.sprites[key]
      if (sprite && typeof sprite == 'string') {
        template += `<div><img src="${sprite}" /></div>`
      }
    }

    return template
  }


}