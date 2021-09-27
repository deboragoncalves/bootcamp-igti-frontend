<template>
  <div class="main">
    <p class="title">Detalhes</p>
    <div class="pokemon-details" v-if="pokemonDetails">
      <p class="pokemon-item"><span>Nome:</span> {{ pokemonDetails.name }}</p>
      <p class="pokemon-item"><span>Peso:</span> {{ pokemonDetails.weight }}</p>
      <p class="pokemon-item">
        <span>Altura:</span> {{ pokemonDetails.height }}
      </p>
      <div class="list-images-pokemon">
        <ul v-for="(imageUrl, index) in pokemonDetails.sprites" :key="index">
          <li v-if="imageUrl && typeof imageUrl === 'string'">
            <img :src="imageUrl" alt="Poken" />
          </li>
        </ul>
      </div>
    </div>
    <button
      class="btn btn-outline-success button-back"
      @click="goBackPokemonList"
      type="button"
    >
      Voltar
    </button>
  </div>
</template>

<script>
import { getPokemonById } from "../service/pokemonService.js";

export default {
  data() {
    return {
      pokemonDetails: null,
    };
  },
  mounted() {
    let id = this.$route.params.id;

    getPokemonById(id).then((response) => {
      this.pokemonDetails = response;
    });

    // TODO: mostrar imagem Pokemon
    // TODO: Loader
  },
  methods: {
    goBackPokemonList() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 10px;
  font-weight: bold;
  font-style: italic;
  font-size: 24px;
}

.pokemon-details, .button-back {
  margin: 10px 20px;
}

.pokemon-item span {
  font-weight: 600;
}

.list-images-pokemon {
  display: flex;
  flex-wrap: wrap;
}

.list-images-pokemon ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.list-images-pokemon ul li img {
  width: 120px;
  height: 120px;
}
</style>