import { createRouter, createWebHistory } from "vue-router";
import PageA from "../PageA.vue";
import PageB from "../PageB.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/a",
      name: "a",
      component: PageA,
    },
    {
      path: "/b",
      name: "b",
      component: PageB,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
