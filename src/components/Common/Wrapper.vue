<script setup>
import {useThemeStore} from "@/stores/theme";

const store = useThemeStore()

</script>

<template>
  <div class="flex-auto flex flex-col gap-6 rounded-lg shadow p-4 " :class="store.isDark ? 'bg-primary-1' : 'bg-white'">
    <slot/>
  </div>

</template>
