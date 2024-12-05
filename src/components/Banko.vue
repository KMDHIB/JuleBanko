<script setup>
import Bankoplade from '../components/Bankoplade.vue'
import { ref } from 'vue'

defineProps({

})

const started = ref(false)
const numberList = ref([])
const newNumber = ref(0);
const boards = ref([])

function addBankoplade(newPlade) {
  if (newPlade.rows.length === 3 && newPlade.rows.every(row => row.length === 5)) {
    boards.value.push(newPlade)
  } else {
    console.error('Invalid Bankoplade format')
  }
}

function toggleGameStatus() {
  if (started.value === true) {
    var ok = confirm('Er du sikker på at du vil stoppe spillet?');
    if (ok) {
      boards.value = [];
      started.value = false;
    }
  }
  else {
    started.value = true;
  }
}

function addNumber() {
  if (newNumber.value > 0 && !numberList.value.includes(newNumber.value)) {
    numberList.value.push(newNumber.value);
    newNumber.value = 0;
  }
}
</script>

<template>
  <div class="buttonBox">
    <button v-if="!started" @click="addBankoplade({
      rows: new Array(3).fill(0).map(() => new Array(5).fill(0))
    })">Tilføj Bankoplade</button>
    <button v-if="boards?.length > 0" @click="toggleGameStatus()">{{ started ? 'Stop Spil' : 'Start Spil' }}</button>
  </div>
  <div v-if="started">
    <input type="number" v-model="newNumber" />
    <button @click="addNumber()">Udtræk nummer</button>
    <ul class="numberList">
      <li v-for="(number, index) in numberList" :key="index">{{ number }}</li>
    </ul>
  </div>
  <div>
    <ul>
      <li v-for="(plade, index) in boards" :key="index">
        <div class="pladeBox">
          <h3>Plade {{ index + 1 }}</h3>
          <button v-if="!started" @click="boards.splice(index, 1)">Slet</button>
        </div>
        <Bankoplade :rows="plade.rows" />
      </li>
    </ul>
  </div>

</template>

<style scoped>
.buttonBox {
  display: flex;
  justify-content: space-around;
}

.numberList {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;

  li {
    color: dodgerblue;
    border-radius: 50%;
    box-shadow: 1px 1px 1px dodgerblue, -1px -1px 1px dodgerblue, 1px -1px 1px dodgerblue, -1px 1px 1px dodgerblue;
    width: 1.5em;
    height: 1.5em;
  }
}

.pladeBox {
  display: flex;
  justify-content: space-between;
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
