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
        <td v-for="(number, numberIndex) in row" :key="numberIndex">
          <input type="text" v-model="rows[rowIndex][numberIndex]" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
