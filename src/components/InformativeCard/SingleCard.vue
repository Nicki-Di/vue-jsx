<script setup>
import CardStatus from "@/components/InformativeCard/CardStatus.vue";
import addSeparator from "@/utils/functions/addSeparator";
import {useThemeStore} from "@/stores/theme";
const store = useThemeStore()

defineProps(['data'])
</script>

<template>
  <div
      class="relative bg-primary-1 p-4 rounded-md basis-1/3 flex flex-col justify-end items-center gap-2 min-h-[11rem]">
    <img :src="`/images/${data.image}`" class="absolute -top-11 h-20 rounded-lg bg-primary-1 p-2 dark:bg-transparent change-color-animation"
         alt=""/>

    <p class="b1 font-light font-bold text-s-80">{{ data.title }}</p>
    <p class="h1 font-bold text-s-100">{{ addSeparator(data.amount) }} <span
        class="b2 font-light">{{ data.unit }}</span></p>
    <CardStatus :type="data.type" :text="data.subtitle" :percentage="data.percentage"/>

  </div>

</template>