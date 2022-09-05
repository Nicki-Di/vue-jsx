<script setup>
import {loginLabels, buttons, titles} from "@/utils/persian";
import Input from "@/components/Form/Input.vue"
const username = $ref("")
const password = $ref("")

</script>

<template>
  <div class="login-bg bg-cover bg-no-repeat bg-center h-screen flex-col-center">
    <div class="flex flex-col justify-evenly gap-6 bg-primary px-16 py-4 rounded-lg w-1/4 min-h-[50%] ">
      <div class="flex flex-col gap-4 ">
        <p class="h2 text-s-100 ">{{ titles.login }}</p>
        <p class="b1 text-s-80 ">{{ titles.loginSub }}</p>
      </div>
      <div class="flex-col-center gap-6 ">
        <Input :title="loginLabels.username" type="text" v-model="username"/>
        <Input :title="loginLabels.password" type="password" v-model="password"/>
        <button class="bg-secondary w-full rounded-lg py-2 text-s-100">{{ buttons.login }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-bg {
  background-image: url("/images/login-bg-3.jpg");
}
</style>