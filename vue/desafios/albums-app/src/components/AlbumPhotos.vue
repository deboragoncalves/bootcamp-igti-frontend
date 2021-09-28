<template>
  <p class="title">Fotos</p>
  <ul v-for="(photo, index) in photosList" :key="index">
        <li><img :src="photo.thumbnailUrl" alt="Foto do álbum"></li>
        <li>{{ photo.title }}</li>
  </ul>
</template>

<script>
import { getPhotosAlbum } from '../service/albumsService.js';

export default {
    data() {
        return {
            photosList: []
        }
    },
    mounted() {
        let id = this.$route.params.id;

        getPhotosAlbum(id).then(response => {
            this.photosList = response;
            console.log(this.photosList[0].thumbnailUrl);
        });
    }

    // TODO: substituir foto
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>