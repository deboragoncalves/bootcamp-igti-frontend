<template>
  <div class="main">
    <p class="title">Detalhes</p>
    <div v-if="pokemonDetails">
      <p>Nome: {{ pokemonDetails.name }}</p>
    </div>
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
  }
}
</script>

<style scoped>
</style>