<script setup>
import Bankoplade from '../components/Bankoplade.vue'
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

const bankoplades = ref([])

function addBankoplade(newPlade) {
  if (newPlade.rows.length === 3 && newPlade.rows.every(row => row.length === 5)) {
    bankoplades.value.push(newPlade)
  } else {
    console.error('Invalid Bankoplade format')
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="addBankoplade({
    rows: new Array(3).fill(0).map(() => new Array(5).fill(0))
  })">Tilføj Bankoplade</button>
  <div>
    <ul>
      <li v-for="(plade, index) in bankoplades" :key="index">
        <div class="pladeBox">
          <h3>Plade {{ index + 1 }}</h3>
          <button @click="bankoplades.splice(index, 1)">Slet</button>
        </div>
        <Bankoplade :rows="plade.rows" />
      </li>
    </ul>
  </div>
  
</template>

<style scoped>
h1 {
  color: #42b883;
}

button {
  background-color: #42b883;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
  margin: 1em 0;
}

ul li {
  list-style-type: none;
}
</style>
