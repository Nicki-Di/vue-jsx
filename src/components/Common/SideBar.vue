<script setup>
import MenuSection from "@/components/Auxiliary/MenuSection.vue";
import {copyRight, navigation} from "@/utils/persian"


</script>


<template>
  <div class = "flex-1 flex flex-col fixed inset-y-0 bg-primary-1/95 w-[20%] z-20">
    <div class = "flex-1 flex flex-col overflow-y-auto">
      <div class = "flex-row-center px-4 min-h-[6rem]">
        <img class = "h-8 w-auto" src = "https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
             alt = "Workflow"/>
      </div>
      <nav class = "px-4 mt-4 " aria-label = "Sidebar">
        <MenuSection :items = "navigation"/>
      </nav>
    </div>
    <a href = "#" class = "b2 text-center text-s-100 w-full border-t border-secondary p-4">{{ copyRight }}</a>

  </div>
</template>

