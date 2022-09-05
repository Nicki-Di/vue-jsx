<script setup>
defineProps(['weight', 'color'])
</script>

<template>
  <p class = "change-color-animation " :class="[weight, color ? `text-s-${color}` : 'dark:text-s-100 text-s-10']"> <slot></slot></p>
</template>
