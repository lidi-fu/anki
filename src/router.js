// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import TrendsPage from '@/components/TrendsPage.vue';
import CollectionPage from '@/components/CollectionPage.vue';
import MainPage from './components/MainPage.vue';

const routes = [
    { path: '/', component: MainPage }, // Default route points to MainPage
    { path: '/trends', component: TrendsPage }, // Route for TrendsPage
    { path: '/collection', component: CollectionPage }, // Route for CollectionPage
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
