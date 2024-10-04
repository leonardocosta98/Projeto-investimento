import { createWebHistory, createRouter } from "vue-router";
import Cabecalho from "@/Components/Cabecalho.vue";
import Login from "@/Components/Login.vue";
import Postagem1 from "@/Components/Postagem1.vue";
import Home from "@/Components/Home.vue";
import Postagens from "@/Components/AreaPostagem.vue"
import Conteudo from "@/Components/Conteudo.vue";


const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
    {
        path: "/",
        name: "home",
        component: Postagens
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/postagem1",
        name: "postagem1",
        component: Postagem1    
    },
    ,
    {
        path: "/conteudo",
        name: "Conteudo",
        component: Conteudo    
    }
    ]
    
});

export default router;