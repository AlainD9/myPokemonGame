"use strict";
class Pokemon {
    dexNumber;
    sprite;
    gender;
    pokeType;
    name;
    level;
    health;
    constructor(dexNumber, sprite, gender, pokeType, name, level, health) {
        this.dexNumber = dexNumber;
        this.sprite = sprite;
        this.gender = gender;
        this.pokeType = pokeType;
        this.name = name;
        this.level = level;
        this.health = health;
        this.dexNumber = dexNumber;
        this.sprite = sprite;
        this.gender = gender;
        this.pokeType = pokeType;
        this.name = name;
        this.level = level;
        this.health = health;
    }
    show() {
    }
}
const mew = new Pokemon(151, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/mew.png', 'undefined', 'psychic', 'Mew', 100, 340);
const dragonite = new Pokemon(149, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dragonite.png', 'male', 'dragon', 'Charizard', 55, 172);
const gengar = new Pokemon(94, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gengar.png', 'undefined', 'ghost', 'GhosTongue', 69, 182);
const slowbro = new Pokemon(80, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/slowbro.png', 'undefined', 'water', 'Lazy', 100, 300);
const scyther = new Pokemon(123, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/scyther.png', 'undefined', 'bug', 'GreenReaper', 43, 123);
const psyduck = new Pokemon(54, 'https://img.pokemondb.net/sprites/scarlet-violet/normal/psyduck.png', 'undefined', 'water', 'FuckingShiny', 4, 18);
//# sourceMappingURL=healthCenter.js.map