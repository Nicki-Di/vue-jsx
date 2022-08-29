<script setup>
import Disclosure from "@/components/Disclosure.vue";
defineProps(['title', 'items'])
</script>

<template>
  <div class="flex flex-col border-b border-secondary-1 pb-2 ">
  <p class = "h2 text-s-100 my-4 px-4 ">{{ title }}</p>
  <Disclosure :item = "item" v-for = "item in items" :key = "item.name"
              :items = "items" class="mb-5 "/>
  </div>
</template>