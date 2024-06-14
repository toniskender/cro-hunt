import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ContactPage from '@/views/ContactPage.vue';
import GalleryPage from '@/views/GalleryPage.vue';
import HuntingOfferPage from '@/views/HuntingOfferPage.vue'; 

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/gallery', name: 'Gallery', component: GalleryPage },
  { path: '/offer/:offer', name: 'HuntingOffer', component: HuntingOfferPage },
  { path: '/what-we-offer', name: 'WhatWeOffer', component: HuntingOfferPage },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;