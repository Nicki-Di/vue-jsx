<script setup>
import IconBadge from "@/components/Buttons/IconBadge.vue"
import {MoonIcon} from "@heroicons/vue/24/outline";
import ToggleTheme from "@/components/Buttons/ToggleTheme.vue";

</script>

<template>
  <div class="bg-primary-1/90 backdrop-blur w-[80%] mr-auto p-8 h-24 fixed inset-x-0 z-20">
<!--    <IconBadge :icon="MoonIcon" number="12"/>-->
    <ToggleTheme/>

  </div>
</template>