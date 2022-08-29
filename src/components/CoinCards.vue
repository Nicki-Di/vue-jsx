<script setup>
import SingleCoinCard from "@/components/SingleCoinCard.vue";

const cards = [
  {type: "red", image: "1", amount: 24009874, percentage: 44},
  {type: "green", image: "2", amount: 14009874, percentage: 32},
  {type: "red", image: "3", amount: 2445239874, percentage: 12},
  {type: "green", image: "4", amount: 7649874, percentage: 9},
]
</script>

<template>
  <div class = "flex flex-row gap-8 mt-8 ">
    <SingleCoinCard v-for = "card in cards" :data = "card"/>

  </div>

</template>