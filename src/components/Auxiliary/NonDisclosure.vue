<script setup>
import {ChevronLeftIcon} from '@heroicons/vue/24/solid'
defineProps(['item'])
</script>

<template>
  <a
      :href="item.href"
      class="flex w-full justify-between gap-3 px-4 py-2 rounded-lg text-s-80 transition duration-400 hover:bg-secondary">
    <component :is="item.icon" class="ml-3 h-6 w-6" aria-hidden="true"/>

    <p class="b1 text-right grow ">{{ item.name }}</p>
    <ChevronLeftIcon
        class="h-5 w-5 "
    />
  </a>
</template>
