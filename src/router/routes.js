import { VueElement } from 'vue'

const routes = [
  {
    path: '/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: VueElement.component ('MainLayout') => import('pages/IndexPage.vue') }
    ]
  }
  <router-link to="{ name: 'about' }">About</router-link>
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component => import('pages/ErrorNotFound.vue')
  }
]

export default routes
