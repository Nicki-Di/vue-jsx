<script setup>
import Disclosure from "@/components/Auxiliary/Disclosure.vue";
import Title from '@/components/Texts/Title.vue'

defineProps(['title', 'items'])
</script>

<template>
  <div class="flex flex-col border-b border-secondary-1 pb-2 ">
    <Title class="my-4 px-4 " :fixed-color="true">{{ title }}</Title>
    <Disclosure :item="item" v-for="item in items" :key="item.name"
                :items="items" class="mb-5 "/>
  </div>
</template>