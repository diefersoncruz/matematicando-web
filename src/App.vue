<template>
  <header class="header">
    <h1>Matematicando</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/criar-sala">Criar Sala</router-link>
    <router-link to="/game">Jogar</router-link>
  </header>
  <main class="painel">
    <router-view />
  </main>
  <footer class="footer"></footer>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-direction: column;

  gap: 1em;

  align-items: center;
}
</style>
