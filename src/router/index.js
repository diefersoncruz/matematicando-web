// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import SalaForm from "@/views/SalaForm.vue";
import GameView from "@/views/GameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: GameView,
    },
    {
      path: "/salas",
      name: "salas",
      component: SalaForm,
    },
  ],
});

export default router;
