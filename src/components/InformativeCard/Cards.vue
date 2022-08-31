<script setup>
import SingleCard from "@/components/InformativeCard/SingleCard.vue";
import {titles, units} from "@/utils/persian";
const cards = [
  {
    type: "red",
    title: titles.trade,
    image: "/icons/trade.png",
    amount: 24009454353874,
    percentage: 44,
    subtitle: titles.yesterday,
    unit: units.toman
  },
  {
    type: "green",
    title: titles.wage,
    image: "/icons/wage.png",
    amount: 14003259874,
    percentage: 32,
    subtitle: titles.yesterday,
    unit: units.toman

  },
  {
    type: "red",
    title: titles.onlineUsers,
    image: "/icons/users.png",
    amount: 242874,
    percentage: 12,
    subtitle: titles.yesterday,
    unit: ""

  },
]
</script>

<template>
  <div class="flex flex-row gap-8 mt-8 items-center justify-center">
    <SingleCard v-for="card in cards" :data="card"/>

  </div>

</template>