import axios from 'axios';

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const getPokemonList = async () => {
    let response = await axios.get(baseUrl + "/?limit=100");
    return response.data;
}

const getPokemonImageUrl = id => {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/" + id + ".png";
}

export {
    getPokemonList,
    getPokemonImageUrl
}