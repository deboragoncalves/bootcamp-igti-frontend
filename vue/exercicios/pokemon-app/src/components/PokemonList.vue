<template>
  <div class="main" v-if="showPokemonList">
    <p class="title">Lista de pokemons</p>
    <ul v-for="(pokemon, index) in pokemonList" :key="index">
      <li class="pokemon-name" @click="goToDetailsComponent(pokemon.url)">
        <span>Nome:</span>
        {{ pokemon.name }}
      </li>
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

  // TODO: mostrar imagem Pokemon
  // TODO: Loader
}
</script>

<style scoped>

.title {
  text-align: center;
  margin: 10px;
  font-weight: bold;
  font-style: italic;
  font-size: 24px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.pokemon-name {
  cursor: pointer;
  border-bottom: 1px solid lightgrey;
  margin: 0 10px;
  padding: 15px 10px;
}

.pokemon-name span {
  font-weight: 600;
}

</style>