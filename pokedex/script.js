const poke_container = document.getElementById('poke-container');
const pokemon_fragment = new DocumentFragment();

const pokemon_count = 10;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++){
        await getPokemon(i)
    }
    poke_container.appendChild(pokemon_fragment);
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('data', data);
    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokeId = pokemon.id.toString().padStart(3, '0');
    const pokeTypes = pokemon.types.map(type => type.type.name);
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1);
    const color = colors[type];

    const elPokemon = document.createElement('div');
    elPokemon.classList.add('pokemon');
    elPokemon.style.backgroundColor = color;
    
    const cardTemplate = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
        </div>
        <div class="info">
            <span class="number">#${pokeId}</span>
            <h3 class="name">${pokemon.name}</h3>
            <small class="type">
                Type: <span>${type}</span>
            </small>
        </div>
    `

    elPokemon.innerHTML = cardTemplate;

    console.log(elPokemon);
    pokemon_fragment.append(elPokemon);
}

fetchPokemons();
