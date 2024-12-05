<script setup>
import { ref } from 'vue'

defineProps({
  rows: Array
})

</script>

<template>
  <table>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex" :class="{ bingo: cell.isBingo, drawn: cell.isDrawn }">
          <input type="text" v-model="cell.number" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

.drawn input {
  background-color: yellow;
}

.bingo input {
  background-color: hotpink;
}

table {
  width: 100%;
}

input {
  width: 2em;
  height: 2em;
  text-align: center;
}
</style>
