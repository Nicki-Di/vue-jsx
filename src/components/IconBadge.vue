<script setup>
defineProps(['icon', 'number'])

</script>

<template>
  <div class="relative bg-primary text-s-100 h-10 w-10 p-2 rounded-lg ">
    <span class="absolute -top-1 -right-1 inline-flex justify-center items-center w-5 h-5 b2 bg-accent  rounded-full">
    {{number}}
  </span>
    <component :is = "icon" aria-hidden = "true"/>

  </div>

</template>