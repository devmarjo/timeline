<<<<<<< HEAD
const routes = [
  {
    path: "/timeline/:id",
    component: () => import("layouts/TimeLine.vue"),
  },
  {
    path: "/forumariotal",
    component: () => import("layouts/TimeLine.vue"),
  },
  {
    path: "/componentenao sei o que",
    component: () => import("layouts/TimeLine.vue"),
  },
];
=======
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
>>>>>>> 22dc5b46d321f936583e13acd965b27ee7cd983d

export default routes;
