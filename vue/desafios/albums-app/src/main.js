import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AlbumsList from './components/AlbumsList.vue';
import AlbumPhotos from './components/AlbumPhotos.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AlbumsList
        },
        {
            path: '/albums/:id',
            name: 'albumPhotos',
            component: AlbumPhotos
        }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');