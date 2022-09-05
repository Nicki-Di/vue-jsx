<script setup>
import Title from '@/components/Texts/Title.vue'

defineProps(['title','modelValue', 'color'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-control">
    <label class="label cursor-pointer flex flex-row w-fit gap-4 ">
      <Title weight="b1" color="10">{{title}}</Title>
      <input type="checkbox" class="toggle toggle-accent" :checked="modelValue" :value="modelValue"
             @change="$emit('update:modelValue', $event.target.checked)"/>
    </label>
  </div>
</template>
