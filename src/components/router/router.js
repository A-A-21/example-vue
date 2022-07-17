import {createRouter, createWebHistory} from "vue-router";
import Main from "@/components/pages/Main";
import UserPage from "@/components/pages/UserPage";
import About from "@/components/pages/About";
import PostIdPage from "@/components/pages/PostIdPage";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    }
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;