<template>
  <p class="title">Fotos</p>
  <ul v-for="(photo, index) in photosList" :key="index">
        <li class="photo-image"><img :src="photo.thumbnailUrl" alt="Foto do álbum"></li>
        <li class="photo-title">{{ photo.title }}</li>
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
        });
    }

    // TODO: substituir foto (API https://via.placeholder.com/150/92c952)
}
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
    margin: 0 10px;
    padding: 10px 10px 15px 10px;
}

.photo-image {
    margin-top: 8px;
}

.photo-title {
    border-bottom: 1px solid lightgrey;
}
</style>