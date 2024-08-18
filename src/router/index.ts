import { createRouter, createWebHistory } from "vue-router";

// paginas
import AbonadosView from "../views/AbonadosView/AbonadosView.vue";
import AboutView from "../views/AbonadosView/AbonadosView.vue";
import CalendarioView from "../views/CalendarioView/CalendarioView.vue";
import DescripcionView from "../views/DescripcionView/DescripcionView.vue";
import HomeView from "../views/HomeView/HomeView.vue";
import ObjetivosView from "../views/ObjetivosView/ObjetivosView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/objetivos",
            name: "objetivos",
            component: ObjetivosView,
        },
        {
            path: "/calendario",
            name: "calendario",
            component: CalendarioView,
        },
        {
            path: "/abonados",
            name: "abonados",
            component: AbonadosView,
        },
        {
            path: "/descripcion",
            name: "descripcion",
            component: DescripcionView,
        },
    ],
});

export default router;
