<script setup>
defineProps(['title', 'type', 'model'])
</script>

<template>
  <div class="b1 w-full text-s-80">
    <p class="mb-2 text-right">{{ title }}</p>
    <input v-model="model" :type="type" class="bg-transparent w-full border border-secondary rounded-lg p-2 focus:ring-0 focus:outline-0 ">
  </div>
</template>
