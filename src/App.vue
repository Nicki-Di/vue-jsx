<script setup>
import {RouterView} from 'vue-router'
import SideBar from "@/components/Common/SideBar.vue"
import Header from "@/components/Common/Header.vue"
import {useThemeStore} from "@/stores/theme";
import {onMounted} from "vue";

const notShowDashboard = window.location.href.includes("login") || window.location.href.includes("test")
const store = useThemeStore()
onMounted(()=>{
  store.isDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
})

store.$subscribe(() => {
  store.isDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
})
</script>

<template>
  <SideBar v-if="!notShowDashboard" />
  <Header v-if="!notShowDashboard"/>
  <RouterView/>
</template>
