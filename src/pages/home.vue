<script setup>
import DashboardContent from "@/components/Common/DashboardContent.vue";
import CoinCards from "@/components/InformativeCard/Cards.vue";
import ColumnStacked from "@/components/Charts/ColumnStacked.vue";
import Table from "@/components/Table.vue";
import {titles} from "@/utils/persian";
</script>

<template>

  <DashboardContent>
<CoinCards/>
    <div class="flex flex-row justify-between mt-24 items-stretch gap-8 ">
      <ColumnStacked :title="titles.maxTrade"/>
      <Table :title="titles.maxWage"/>
    </div>


  </DashboardContent>

</template>

