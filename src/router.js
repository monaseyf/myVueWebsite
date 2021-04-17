import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import OtherProjects from "./pages/OtherProjects.vue";


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/About.vue"),
        },
        
        {
            path: "/ContactMe",
            name: "ContactMe",
            component: () =>
                import ("./views/ContactMe.vue"),
        },
        {
            path: "/Skills",
            name: "Skills",
            component: () =>
                import ("./views/Skills.vue"),
        },
        {
            path: "/Portfolio",
            name: "Portfolio",
            component: () =>
                import ("./views/Portfolio.vue"),
        },
        {
            path: "/ArchProjects",
            name: "ArchProjects",
            component: () =>
                import ("./pages/ArchProjects.vue"),
        },
        {
            path: "/OtherProjects",
            name: "OtherProjects",
            component: () =>
                import ("./pages/OtherProjects.vue"),
        },
        {
            path: "/photography",
            name: "photography",
            component: () =>
                import ("./pages/photography.vue"),
        },
        {
            path: "/Ui",
            name: "Ui",
            component: () =>
                import ("./pages/Ui.vue"),
        },
    ],
});