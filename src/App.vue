<template>
  <header class="header">
    <h1 class="menu-title">MATEMATICANDO</h1>
    <nav class="menu">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="item.link">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main class="painel">
    <router-view />
  </main>
  <footer class="footer"></footer>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Home", link: "/" },
        { label: "Salas", link: "/salas" },
      ],
    };
  },
};
</script>
