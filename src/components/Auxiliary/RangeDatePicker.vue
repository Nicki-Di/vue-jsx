<script setup>
import DatePicker from 'vue3-persian-datetime-picker'

const date = $ref('')

</script>
<template>
  <DatePicker
      v-model="date"
      format="jYYYY/jMM/jDD"
      range
      clearable
      color="#473f72"
      placeholder="بازه زمانی موردنظر خود را انتخاب کنید."
  />

  <!--  <date-picker v-model="start"-->
  <!--               color="#3A3360"-->
  <!--               format="jYYYY/jMM/jDD"-->
  <!--  />-->

  <!--  <date-picker v-model="end"-->
  <!--               :disabled="!start"-->
  <!--               :min="start"-->
  <!--  />-->

</template>


<style>
.vpd-next {
  margin-left: 1rem;
  width: fit-content;
}

.vpd-prev {
  width: fit-content;
  margin-right: 1rem;
}

.vpd-month-label {
  width: fit-content
}
</style>