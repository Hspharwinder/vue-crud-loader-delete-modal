import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import Update from "./views/Update.vue";
import Add from "./views/Add.vue";
import Detail from "./views/Detail.vue";
import AllLoader from "./views/AllLoader.vue";


const routes = [
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'Update',
        path:'/update/:id',
        component:Update
    },
    {
        name:'Add',
        path:'/add',
        component:Add
    },
    {
        name:'Detail',
        path:'/detail/:id',
        component:Detail
    },
    {
        
        name:'AllLoader',
        path:'/all-loader',
        component:AllLoader
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;