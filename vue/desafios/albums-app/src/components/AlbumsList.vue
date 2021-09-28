<template>
  <p class="title">Lista de álbuns</p>
  <ul v-for="(album, index) in albumsList" :key="index">
    <li @click="showPhotosAlbum(album.id)">{{ album.title }}</li>
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
  },
  methods: {
    showPhotosAlbum(id) {
      this.$router.push({ name: "albumPhotos", params: { id: id }})
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

ul li {
  cursor: pointer;
}
</style>