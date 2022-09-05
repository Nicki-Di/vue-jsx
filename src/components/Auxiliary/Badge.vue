<script setup>
defineProps(['type'])
</script>

<template>
  <span class="badge w-16 " :class="type === 'green' ? 'badge-success' : 'badge-error'">
    <slot></slot>
  </span>
</template>
