<script setup>
import DashboardContent from "@/components/Common/DashboardContent.vue";
import ComplexTable from "@/components/Tables/ComplexTable.vue";
import {titles} from "@/utils/persian";

</script>

<template>
  <DashboardContent>
   <ComplexTable :title="titles.customers"/>
  </DashboardContent>
</template>
