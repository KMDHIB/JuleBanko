<script setup>
import { ref } from 'vue'

defineProps({
  rows: Array,
  isStarted: Boolean
})

</script>

<template>
  <table>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex" :class="{ bingo: cell.isBingo, drawn: cell.isDrawn }">
          <input v-if="!isStarted" type="text" v-model="cell.number" @focus="cell.number = ''" />
          <span v-if="isStarted">{{ cell.number }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
td span {
  display: inline-block;
  color: red;
  border-radius: 50%;
  box-shadow: 1px 1px 1px red, -1px -1px 1px red, 1px -1px 1px red, -1px 1px 1px red;
  width: 1.5em;
  height: 1.5em;
}

.drawn span {
  background-color: yellow;
}

.bingo span {
  background-color: hotpink;
  color: peachpuff;
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
