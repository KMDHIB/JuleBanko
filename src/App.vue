<script setup>
import Banko from './components/Banko.vue'
</script>

<template>
  <div class="headingBox">
    <a href="https://uvdata.dk" target="_blank">
      <img src="./assets/uvdata.svg" class="logo" alt="UVdata logo" />
    </a>
    <h1>Julebanko</h1>
  </div>
  <Banko />
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

.headingBox {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

h1 {
  color: #42b883;
}
</style>
