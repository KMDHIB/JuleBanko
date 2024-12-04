<script setup>
import Banko from './components/Banko.vue'
</script>

<template>
  <div>
    <a href="https://uvdata.dk" target="_blank">
      <img src="./assets/uvdata.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <Banko msg="Jule Banko" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
