type gender = 'male' | 'female' | 'undefined';
type pokeType ='grass' | 'fire' | 'water' | 'bug' | 'flying' | 'poison' | 'electric' | 'normal' | 'psychic' | 'ghost' | 'dragon' | 'rock' | 'ground' | 'fighting' | 'ice';

interface healingMachine{
spots: number;
}

class Pokemon{
    constructor(protected dexNumber: number,protected sprite: string,protected gender: gender,protected pokeType: pokeType,protected name: string,protected nickname: string,protected level: number,protected health: number,protected currentHealth: number){}

    getNickname(){return this.nickname;}
    getCurrentHp(){return this.currentHealth;}
    getHp(){return this.health;}
    getHpPercentage(){return (this.currentHealth / this.health) * 100;}

    generateStyleString(styles: any){
        return Object.keys(styles)
        .map((property) => `${property}:${styles[property]}`)
        .join(';');
    }
        
    healHp(){
        this.currentHealth = this.health;
        this.renderHealthBar();
    }

    show() {
        const healthBarStyle = {
            width: `${this.getHpPercentage()}%`,
            background: 'green',
            height: '10px',
        };

        return `
            <div class="pokemon">
                <div class="img-container">
                    <img alt="mew.gif" src="${this.sprite}">
                    <p>Lv${this.level}<br>Hp${this.currentHealth}</p>
                    <div class="healthBar" style="${this.generateStyleString(healthBarStyle)}"></div>
                    <div class="healthPercentage">${Math.round(this.getHpPercentage())}%</div>
                </div>
                <h2>${this.nickname}<br>gender:${this.gender}
                <div class ="smallText">
                    ${this.name} dex${this.dexNumber}<br>Type:${this.pokeType}<br>Hp Stat ${this.health}</h2>
                </div>
            </div>`;
    }
    

    renderHealthBar(){
            const healthBar = document.querySelector(`#${this.nickname} .healthBar`) as HTMLElement;
            if (healthBar){
            setTimeout(() =>{
                    const healthBarStyle ={
                    width: `${this.getHpPercentage()}%`,
                    background: 'green',
                    height: '10px',
                    transition: 'width 0.3s',
                };
                healthBar.style.cssText = this.generateStyleString(healthBarStyle);
            }, 10);
        }
    }
}

const pokemons:Pokemon[] = [
    new Pokemon (151,'https://projectpokemon.org/images/normal-sprite/mew.gif','undefined','psychic','Mew','Meow',100,340,127),
    new Pokemon(149,'https://projectpokemon.org/images/normal-sprite/dragonite.gif','male','dragon','Dragonite','Charizard',55,172,23),
    new Pokemon(94,'https://projectpokemon.org/images/normal-sprite/gengar.gif','female','ghost','Gengar','GhosTongue',69,182,69),
    new Pokemon(80,'https://projectpokemon.org/images/normal-sprite/slowbro.gif','male','water','Slowbro','Lazy',100,300,218),
    new Pokemon(123,'https://projectpokemon.org/images/normal-sprite/scyther.gif','female','bug','Scyther','GreenReaper',43,123,72),
    new Pokemon(54,'https://projectpokemon.org/images/shiny-sprite/psyduck.gif','female','water','Psyduck','FuckingShiny',4,18,18),
]

function heal(pokemons: Pokemon[]){
    for (const pokemon of pokemons){
        if (pokemon.getCurrentHp() === pokemon.getHp()){
            console.log(`${pokemon.getNickname()} is already healed.`)
        pokemon.healHp();
        } else if (pokemon.getCurrentHp() <= pokemon.getHp()) {
            pokemon.healHp();
            console.log(`${pokemon.getNickname()}'s current health: ${pokemon.getCurrentHp()}`);
        }
    }
    renderPokemonList(pokemons);
}

function renderPokemonList(pokemons: Pokemon[]) {
    const container = document.getElementById('pokemonContainer');
    let allPokemonHTML = '';
    for (const pokemon of pokemons) {
        allPokemonHTML += pokemon.show();
    }
    if (container) {
        container.innerHTML = allPokemonHTML;
    }
}
 

function handleHealButtonClick(){
    heal(pokemons);
}

const container = document.getElementById('pokemonContainer');
let allPokemonHTML = '';
for (const pokemon of pokemons){
    allPokemonHTML += pokemon.show();
}
if (container){
    container.innerHTML = allPokemonHTML;
}

const healButton = document.querySelector('.healingMachine') as HTMLElement;
if (healButton){
    healButton.addEventListener('click', () => {heal(pokemons);});
}

for (const pokemon of pokemons){
    console.log(`${pokemon.getNickname()}'s current health: ${pokemon.getCurrentHp()}`);
}