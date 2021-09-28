<template>
  <p class="title">Lista de álbuns</p>
  <ul v-for="(album, index) in albumsList" :key="index">
    <li @click="showPhotosAlbum(album.id)">{{ album.title }}</li>
  </ul>
</template>

<script>
import { getAlbumsList } from "../service/albumsService.js";

export default {
  data() {
    return {
      albumsList: [],
    };
  },
  mounted() {
    getAlbumsList().then((response) => {
      this.albumsList = response;
    });
  },
  methods: {
    showPhotosAlbum(id) {
      this.$router.push({ name: "albumPhotos", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 10px;
  font-weight: bold;
  font-size: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul li {
  cursor: pointer;
  border-bottom: 1px solid lightgrey;
  margin: 0 10px;
  padding: 15px 10px;
}
</style>