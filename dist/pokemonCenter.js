"use strict";
class Pokemon {
    dexNumber;
    sprite;
    gender;
    pokeType;
    name;
    nickname;
    level;
    health;
    constructor(dexNumber, sprite, gender, pokeType, name, nickname, level, health) {
        this.dexNumber = dexNumber;
        this.sprite = sprite;
        this.gender = gender;
        this.pokeType = pokeType;
        this.name = name;
        this.nickname = nickname;
        this.level = level;
        this.health = health;
    }
    show() {
        return `<div class="pokemon">
            <img src="${this.sprite}">
            <h2>${this.nickname}</h2>
            <h3>${this.name}, dex num: ${this.dexNumber}</h3>            
            <p>${this.gender}, ${this.pokeType},Lv ${this.level},Hp ${this.health}</p>
        </div>`;
    }
}
const pokemons = [
    new Pokemon(151, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/mew.png', 'undefined', 'psychic', 'Mew', 'Meow', 100, 340),
    new Pokemon(149, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dragonite.png', 'male', 'dragon', 'Dragonite', 'Charizard', 55, 172),
    new Pokemon(94, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gengar.png', 'female', 'ghost', 'Gengar', 'GhosTongue', 69, 182),
    new Pokemon(80, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/slowbro.png', 'male', 'water', 'Slowbro', 'Lazy', 100, 300),
    new Pokemon(123, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/scyther.png', 'female', 'bug', 'Scyther', 'GreenReaper', 43, 123),
    new Pokemon(54, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/psyduck.png', 'female', 'water', 'Psyduck', 'FuckingShiny', 4, 18),
];
function display(pokemon) {
    const container = document.getElementById('pokemonContainer');
    if (container) {
        let allPokemonHTML = '';
        for (const pokemon of pokemons) {
            allPokemonHTML += pokemon.show();
        }
        container.innerHTML = allPokemonHTML;
    }
}
for (const pokemon of pokemons) {
    console.log(pokemon);
    display(pokemon);
}
//# sourceMappingURL=pokemonCenter.js.map