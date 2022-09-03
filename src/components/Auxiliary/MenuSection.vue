<script setup>
import Disclosure from "@/components/Auxiliary/Disclosure.vue";

defineProps(['items'])
</script>

<template>
  <div class="flex flex-col border-b border-secondary-1 pb-2 ">
    <Disclosure :item="item" v-for="item in items" :key="item.name" class="mb-5 "/>
  </div>
</template>