<template>
  <div class="main">
    <p class="title">Lista de pokemons</p>
    <ul v-for="(pokemon, index) in pokemonList" :key="index">
      <li>{{ pokemon.name }}</li>
      <li>{{ pokemon.url }}</li>
      <!-- TODO: mostrar imagem Pokemon
        <li><img :src="getPokemonId(pokemon.url)" alt="Pokemon"></li> 
      -->
    </ul>
  </div>
</template>

<script>
import { getPokemonList } from "../service/pokemonService.js";

export default {
  data() {
    return {
      pokemonList: [],
      pokemonId: 0,
    };
  },
  mounted() {
    getPokemonList().then((response) => {
      this.pokemonList = response.results;
      this.getPokemonId(this.pokemonList);
    });
  },
  methods: {
    getPokemonId(pokemonList) {

      for (let pokemon of pokemonList) {
        let url = pokemon.url;
        url = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        this.pokemonId = parseInt(url);
      }

      // TODO: mostrar imagem Pokemon

    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
}
</style>