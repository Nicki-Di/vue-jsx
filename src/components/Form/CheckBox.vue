<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      type="checkbox"
      :checked="modelValue"
  />
</template>