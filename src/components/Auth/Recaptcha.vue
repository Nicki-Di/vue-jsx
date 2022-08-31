<script setup>
import {VueReCaptcha, useReCaptcha} from 'vue-recaptcha-v3'

const {executeRecaptcha, recaptchaLoaded} = useReCaptcha()

const recaptcha = async () => {
  recaptchaLoaded().then(loaded => {
    console.log(loaded)
    executeRecaptcha('login').then(token => console.log(token))
  })}
</script>

<template>
  <VueReCaptcha
      sitekey="6Lew3LUhAAAAACWbf64IvNNs7tpV6evfoT-VvRlk"
      :load-recaptcha-script="true"
      @verify="console.log('yay')"
      @error="console.log('fuck!')"
  ></VueReCaptcha>
  <button @click="recaptcha">Execute recaptcha</button>
</template>
