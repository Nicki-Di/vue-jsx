<script setup>
import CoinCardStatus from "@/components/CoinCardStatus.vue";

defineProps(['data'])
</script>

<template>
  <div
      class = "relative bg-primary-1 p-4 rounded-md basis-1/4 flex flex-col justify-end items-center gap-2 min-h-[9rem]">
    <img :src = "`/images/coins/${data.image}.svg`" class = "absolute -top-10 shadow-lg rounded-full"
         alt = ""/>

    <p class = "h1 font-bold text-s-100">{{ data.amount }} $</p>
    <CoinCardStatus :type = "data.type" text = "این هفته" :percentage = "data.percentage"/>

  </div>

</template>