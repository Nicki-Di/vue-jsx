<script setup>
import {copyRight, navigation} from "@/utils/persian"
import Disclosure from "@/components/Auxiliary/Disclosure.vue";
import NonDisclosure from "@/components/Auxiliary/NonDisclosure.vue";

</script>


<template>
  <div class="flex flex-col fixed inset-y-0 bg-primary-1/95 w-[17%] z-20">
    <div class="flex-1 flex flex-col overflow-y-auto">
      <div class="flex-row-center px-4 min-h-[6rem]">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
             alt="Workflow"/>
      </div>
      <nav class="px-4 mt-4 " aria-label="Sidebar">
        <Disclosure v-for="item in navigation.filter(item => item.subMenu)" :item="item" :key="item.name" class="mb-5 "/>
        <NonDisclosure v-for="item in navigation.filter(item => !item.subMenu)" :item="item" :key="item.name" class="mb-5 "/>
      </nav>
    </div>
    <a href="#" class="b2 text-center text-s-100 w-full border-t border-secondary p-4">{{ copyRight }}</a>

  </div>
</template>

