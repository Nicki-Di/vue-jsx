<script setup>
import DashboardContent from "@/components/Common/DashboardContent.vue";
import CoinCards from "@/components/InformativeCard/Cards.vue";
import ColumnStacked from "@/components/Charts/ColumnStacked.vue";
import RadialBar from "@/components/Charts/RadialBar.vue";
import Table from "@/components/Table.vue";
import {titles} from "@/utils/persian";
import DateTimeChart from "@/components/Charts/DateTimeChart.vue";
</script>

<template>

  <DashboardContent class="flex flex-col gap-12 ">
<CoinCards/>
    <div class="flex flex-row justify-between items-stretch gap-8 ">
      <ColumnStacked :title="titles.maxTrade" />
      <Table :title="titles.maxWage" />
    </div>
    <div class="flex flex-row justify-between items-stretch gap-8 ">
      <RadialBar :title="titles.servicesUsers"/>
      <DateTimeChart :title="titles.usersView"/>

    </div>



  </DashboardContent>

</template>

