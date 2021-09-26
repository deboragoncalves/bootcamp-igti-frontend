<template>
  <div class="main">
    <pokemon-list></pokemon-list>
    <pokemon-details></pokemon-details>
    <router-view></router-view>
  </div>
</template>

<script>
import PokemonList from './components/PokemonList.vue';
import PokemonDetails from './components/PokemonDetails.vue';

export default {

  components: {
    PokemonList,
    PokemonDetails
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Segoe 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
