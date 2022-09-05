<script setup>
import {
  DxDataGrid,
  DxColumn,
  DxFilterRow,
  DxScrolling,
  DxPaging,
  DxExport,
  DxHeaderFilter
} from 'devextreme-vue/data-grid';
import {locale} from 'devextreme/localization';
import customers from '@/data/customers.js';
import Wrapper from '@/components/Common/Wrapper.vue'
import Title from '@/components/Texts/Title.vue'
import {tableTitles, buttons, status} from "@/utils/persian";
import Toggle from '@/components/Form/Toggle.vue'
import Badge from '@/components/Auxiliary/Badge.vue'
import onExporting from "@/utils/functions/onExporting";

const applyFilterTypes = [
  {
    key: 'auto',
    name: 'Immediately',
  },
  {
    key: 'onClick',
    name: 'On Button Click',
  }];
const currentFilter = applyFilterTypes[0].key;


locale("fa-IR");

const showFilter = $ref(true)
const dataGridRefName = $ref()
const cols = Object.keys(customers[0])

defineProps(['title'])
</script>

<template>
  <Wrapper>
    <Title weight="h2">{{title}}</Title>
    <div class="flex flex-col ">
      <Toggle :title="buttons.toggleShowFilter" v-model="showFilter" class=" z-10 mr-4 "/>
      <DxDataGrid
          @exporting="onExporting"
          id="gridContainer"
          :ref="dataGridRefName"
          :data-source="customers"
          key-expr="ID"
          :show-borders="true"
          :rtl-enabled="true"
          :show-row-lines="true"
          :row-alternation-enabled="true"
      >
        <DxExport
            :enabled="true"
        />
        <DxScrolling row-rendering-mode="virtual"/>
        <DxPaging :page-size="10"/>
        <DxFilterRow
            :visible="showFilter"
            :apply-filter="currentFilter"
        />
        <DxHeaderFilter
            :visible="showFilter"
        />

        <DxColumn
            v-for="col in cols"
            :data-field="col"
            :caption="tableTitles.fullName"
            :allowHeaderFiltering="false"
            :data-type="col.toLocaleLowerCase().includes('date') ? 'date' : ''"
        />

        <DxColumn
            data-field="Status"
            :caption="tableTitles.status"
            cell-template="cellTemplate"
            alignment="center"
        />
        <template #cellTemplate="{ data }">
          <Badge :type="data.value === status.active ? 'green' : 'red'">
            {{ data.value }}
          </Badge>
        </template>
      </DxDataGrid>
    </div>

  </Wrapper>

</template>

<style >

.dx-datagrid-action{
  text-align: center !important;
}
</style>
