<script setup>
defineProps(['type', 'text', 'percentage'])

</script>

<template>
  <div class = "flex flex-row items-center gap-2" v-if = "type === 'green'">
    <p class = "b2 text-success">{{ percentage }}%</p>
    <p class = "b2 text-s-80">{{ text }}</p>
    <img src = "/icons/green.svg" alt = "green"/>
  </div>


  <div class = "flex flex-row items-center gap-2 " v-else-if = "type === 'red'">
    <p class = "b2 text-alert">{{ percentage }}%</p>
    <p class = "b2 text-s-80 ">{{ text }}</p>
    <img src = "/icons/red.svg" alt = "red"/>
  </div>

</template>