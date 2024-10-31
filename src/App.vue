<template>
  <header class="header">
    <h1>Matematicando</h1>
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

<style scoped>
.menu {
  background-color: #f0f0f0;
  padding: 1em;
  text-align: center;
  align-items: center;
}

.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.menu li {
  margin: 0 1em;
}

.menu a {
  text-decoration: none;
  color: #333;
  padding: 0.5em 1em;
  border-radius: 5px;
}

.menu a:hover {
  background-color: #ddd;
}

@media (max-width: 768px) {
  .menu ul {
    flex-direction: column;
  }
}
</style>
