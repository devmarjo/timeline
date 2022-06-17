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

export default routes;
