import { createRouter, createWebHistory } from 'vue-router'
import Per from '@/views/Personagens.vue'
import NotFound from '@/views/NotFound.vue'
import Personagens from '@/views/Personagens.vue'
import Gerenciamento from '@/views/Gerenciamento.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    component: Personagens,
    path: '/',
    name: 'personagens'
   },
   {
    component: Gerenciamento,
    path: '/gerenciamento',
    name: 'gerenciamento'
   },
   {
    component: NotFound,
    path: '/:pathMatch(.*)*'
   }
  ],
})

export default router
