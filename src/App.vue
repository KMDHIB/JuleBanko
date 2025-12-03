<script setup>
import { ref, onMounted } from 'vue'
import Banko from './components/Banko.vue'

const updateAvailable = ref(false)
let swRegistration = null

function applyUpdate() {
  if (!swRegistration || !swRegistration.waiting) return
  swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' })
}

onMounted(() => {
  window.addEventListener('swWaiting', (e) => {
    swRegistration = e.detail.registration
    updateAvailable.value = true
  })
})
</script>

<template>
  <div class="headingBox">
    <a href="https://uvdata.dk" target="_blank">
      <img src="./assets/uvdata.svg" class="logo" alt="UVdata logo" />
    </a>
    <h1>Julebanko</h1>
  </div>
  <Banko />

  <div v-if="updateAvailable" class="update-toast">
    <div>Ny version tilgængelig</div>
    <div class="actions">
      <button @click="applyUpdate">Opdater nu</button>
      <button @click="updateAvailable = false">Luk</button>
    </div>
  </div>
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

.update-toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #42b883;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 280px;
}

.update-toast .actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.update-toast button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: opacity 0.2s;
}

.update-toast button:first-child {
  background: white;
  color: #42b883;
}

.update-toast button:last-child {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.update-toast button:hover {
  opacity: 0.9;
}
</style>
