<script setup>
import DashboardContent from "@/components/Common/DashboardContent.vue";
import Cards from "@/components/InformativeCard/Cards.vue";
import ColumnStacked from "@/components/Charts/ColumnStacked.vue";
import RadialBar from "@/components/Charts/RadialBar.vue";
import SimpleTable from "@/components/Tables/SimpleTable.vue";
import {titles} from "@/utils/persian";
import DateTimeChart from "@/components/Charts/DateTimeChart.vue";
</script>

<template>

  <DashboardContent>
<Cards/>
    <div class="flex flex-row justify-between items-stretch gap-8 ">
      <ColumnStacked :title="titles.maxTrade" />
      <SimpleTable :title="titles.maxWage" />
    </div>
    <div class="flex flex-row justify-between items-stretch gap-8 ">
      <RadialBar :title="titles.servicesUsers"/>
      <DateTimeChart :title="titles.usersView"/>

    </div>



  </DashboardContent>

</template>

