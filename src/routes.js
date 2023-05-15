import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue"
// import ProjectsView from "./views/ProjectsView.vue";

const routes = [
    {
        path: "/",
        name: "Loader",
    },
    {
        path: "/home",
        name: "Home",
        component: HomeView
    },
    // {
    //     path: "/projects",
    //     name: "Projects",
    //     component: ProjectsView
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
