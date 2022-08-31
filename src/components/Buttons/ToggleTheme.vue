<script setup>
import {MoonIcon, SunIcon} from "@heroicons/vue/24/outline";
import {useThemeStore} from "@/stores/theme";
const store = useThemeStore()

</script>

<template>
  <div class="relative">
    <SunIcon :class="{'opacity-100' : store.isDark, 'opacity-0': !store.isDark}" class="absolute transition duration-700 bg-primary text-s-100 h-10 w-10 p-2 rounded-lg cursor-pointer" @click="store.toggleTheme"/>
    <MoonIcon :class="{'opacity-100'  : !store.isDark, 'opacity-0': store.isDark}" class="absolute transition duration-700 bg-primary text-s-100 h-10 w-10 p-2 rounded-lg cursor-pointer" @click="store.toggleTheme"/>

  </div>

</template>
