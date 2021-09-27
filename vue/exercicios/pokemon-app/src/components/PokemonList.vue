<template>
  <div class="main" v-if="showPokemonList">
    <p class="title">Lista de pokemons</p>
    <ul v-for="(pokemon, index) in pokemonList" :key="index">
      <li @click="goToDetailsComponent(pokemon.url)">{{ pokemon.name }}</li>
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
      showPokemonList: false
    };
  },
  mounted() {
    this.showPokemonList = !this.showPokemonList;

    getPokemonList().then((response) => {
      this.pokemonList = response.results;
    });
  },
  methods: {
    goToDetailsComponent(url) {
      let urlPokemon = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
      let idPokemon = parseInt(urlPokemon);
      this.$router.push({ name: "pokemonDetails", params: { id: idPokemon }})
      this.showPokemonList = false;
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
}
</style>