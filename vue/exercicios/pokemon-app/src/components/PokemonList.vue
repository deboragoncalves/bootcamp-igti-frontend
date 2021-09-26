<template>
  <div class="main">List</div>
</template>

<script>
import { getPokemonList } from '../service/pokemonService.js';

export default {
  mounted() {
    getPokemonList().then(response => {
      console.log(response);
    })
  }
}
</script>

<style>
</style>
