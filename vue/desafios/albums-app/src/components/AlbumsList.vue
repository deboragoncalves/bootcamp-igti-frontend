<template>
  <p class="title">Lista de álbuns</p>
  <ul v-for="(album, index) in albumsList" :key="index">
    <li>{{ album.title }}</li>
  </ul>
</template>

<script>
import { getAlbumsList } from '../service/albumsService.js';

export default {
  data() {
    return {
      albumsList: []
    }
  },
  mounted() {
    getAlbumsList().then(response => {
      this.albumsList = response;
    });

    // TODO: Consumir endpoint: /users/1/albums e pegar chave thumbnailUrl
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>