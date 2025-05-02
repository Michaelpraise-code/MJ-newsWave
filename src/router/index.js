import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import NewsDetailsView from '../views/NewsDetailsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: ' contact',
      component: ContactView,
    },
    {
      path: '/category/:category',
      name: 'Category',
      component: () => import('../views/NewsCategoryView.vue'),
    },
    {
      path: '/news/:uuid',
      name: 'NewsDetails',
      component: NewsDetailsView,
    },
  ],
})

export default router
