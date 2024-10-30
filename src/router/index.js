// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import SalaForm from "@/components/SalaForm.vue";
import HomeView from "@/views/HomeView.vue";
import GameView from "@/views/GameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView, // Adicione o componente aqui
    },
    {
      path: "/game",
      name: "GameView",
      component: GameView,
    },
    {
      path: "/criar-sala",
      name: "CriarSala",
      component: SalaForm,
    },
  ],
});

export default router;
