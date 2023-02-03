import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Las rutas a las secciones debem ser agregadas a los componentes: Sidebar y Home
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: true
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/horarios",
      name: "horarios",
      component: () => import("../views/HorariosView.vue")
    },
    {
      path: "/faq-primer-ingreso",
      name: "faq-primer-ingreso",
      component: () => import("../views/FaqPrimerIngresoView.vue")
    }
  ],
});

export default router;
