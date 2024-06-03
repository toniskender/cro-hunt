import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import TouristServicesPage from '@/views/TouristServicesPage.vue';
import GalleryPage from '@/views/GalleryPage.vue';
import HuntingOfferPage from '@/views/HuntingOfferPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/services', name: 'TouristServices', component: TouristServicesPage },
  { path: '/gallery', name: 'Gallery', component: GalleryPage },
  { path: '/offer/:offer', name: 'HuntingOffer', component: HuntingOfferPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;