<script setup>
defineProps(['fixedColor'])
</script>

<template>
  <p class = "h2 text-s-100 change-color-animation" :class="{'dark:text-s-100 text-s-10' : !fixedColor}"> <slot></slot></p>
</template>
