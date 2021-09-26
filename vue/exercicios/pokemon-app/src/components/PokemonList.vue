<template>
  <div class="main">
    <p class="title">Lista de pokemons</p>
    <ul v-for="(pokemon, index) in pokemonList" :key="index">
      <li>{{ pokemon.name }}</li>
      <!-- TODO: mostrar imagem Pokemon
        <li><img :src="getPokemonId(pokemon.url)" alt="Pokemon"></li> 
      -->
    </ul>
  </div>
</template>

<script>
import { getPokemonList } from '../service/pokemonService.js';

export default {
  data() {
    return {
      pokemonList: [],
      getPokemonId: null,
      pokemonId: 0,
      getImagePokemonUrl: null
    }
  },
  mounted() {
    getPokemonList().then(response => {
      this.pokemonList = response.results;
    });

    /* TODO: mostrar imagem Pokemon

    // Get id e url pokemon
    this.getPokemonId = url => {
      url = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
      this.pokemonId = parseInt(url);
      return getPokemonImageUrl(this.pokemonId);
    };
    */

  }
}
</script>

<style>
ul {
  list-style-type: none;
}
</style>
