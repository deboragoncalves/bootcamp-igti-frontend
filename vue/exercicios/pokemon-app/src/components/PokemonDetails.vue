<template>
  <div class="main">
    <p class="title">Detalhes</p>
    <div v-if="pokemonDetails">
      <p>Nome: {{ pokemonDetails.name }}</p>
      <p>Peso: {{ pokemonDetails.weight }}</p>
      <p>Altura: {{ pokemonDetails.height }}</p>
      <ul v-for="(imageUrl, index) in pokemonDetails.sprites" :key="index">
        <li v-if="imageUrl && typeof imageUrl === 'string'"><img :src="imageUrl" alt="Poken"></li>
      </ul>
    </div>
    <button class="btn btn-outline-success" @click="goBackPokemonList" type="button">Voltar</button>
  </div>
</template>

<script>
import { getPokemonById } from "../service/pokemonService.js";

export default {
  data() {
    return {
      pokemonDetails: null
    }
  },
  mounted() {
    let id = this.$route.params.id;

    getPokemonById(id).then(response => {
      this.pokemonDetails = response;
    });

    // TODO: mostrar imagem Pokemon
    // TODO: Loader
  },
  methods: {
    goBackPokemonList() {
      this.$router.replace("/");
    }
  }
}
</script>

<style scoped>
</style>