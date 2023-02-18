import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Las rutas a las secciones debem ser agregadas a los componentes: Sidebar y Home
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: true
    },
    {
      path: "/horarios",
      name: "horarios",
      component: () => import("../views/HorariosView.vue")
    },
    {
      path: "/pensums",
      component: () => import("../views/PensumsView.vue"),
      children: [
        {
          path: "",
          name: "pensums",
          component: () => import("../components/Pensums.vue")
        },
        {
          path: "civil",
          component: () => import("../components/PensumCarrera.vue")
        },
        {
          path: "ciencias-sistemas",
          component: () => import("../components/PensumCarrera.vue")
        },
        {
          path: "mecanica",
          component: () => import("../components/PensumCarrera.vue")
        },
        {
          path: "industrial",
          component: () => import("../components/PensumCarrera.vue")
        },
        {
          path: "mecanica-industrial",
          component: () => import("../components/PensumCarrera.vue")
        },
      ]
    },
    {
      path: "/faq-primer-ingreso",
      name: "faq-primer-ingreso",
      component: () => import("../views/FaqPrimerIngresoView.vue")
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FaqView.vue")
    },
    {
      path: "/cics",
      name: "cics",
      component: () => import("../views/CICSView.vue")
    },
    {
      path: "/aeio",
      name: "aeio",
      component: () => import("../views/AEIOView.vue")
    },
    {
      path: "/manuales",
      name: "manuales",
      component: () => import("../views/ManualesView.vue")
    },
    {
      path: "/biblioteca",
      name: "biblioteca",
      component: () => import("../views/BibliotecaView.vue")
    },
    {
      path: "/tesario",
      component: () => import("../views/TesarioView.vue"),
      children: [
        {
          path: "",
          name: "tesario",
          component: () => import("../components/Tesario.vue")
        },
        {
          path: "civil",
          component: () => import("../components/TesarioCarrera.vue")
        },
        {
          path: "ciencias-sistemas",
          component: () => import("../components/TesarioCarrera.vue")
        },
        {
          path: "mecanica",
          component: () => import("../components/TesarioCarrera.vue")
        },
        {
          path: "industrial",
          component: () => import("../components/TesarioCarrera.vue")
        },
        {
          path: "mecanica-industrial",
          component: () => import("../components/TesarioCarrera.vue")
        },
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

  ],
});

export default router;
