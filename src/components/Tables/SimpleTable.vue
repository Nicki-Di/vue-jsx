<script setup>
import {
  DxColumn,
  DxDataGrid,
  DxSorting,
} from 'devextreme-vue/data-grid';
import employees from '@/data/maxWage.js';
import {tableTitles} from "@/utils/persian";
import RangeDatePicker from '@/components/Auxiliary/RangeDatePicker.vue'
import {useThemeStore} from "@/stores/theme";
import Title from '@/components/Texts/Title.vue'
import Wrapper from '@/components/Common/Wrapper.vue'

const data = $ref(employees)
const store = useThemeStore()

defineProps(['title'])

</script>


<template>
  <Wrapper>
    <Title weight="h2">{{title}}</Title>
    <RangeDatePicker/>
    <DxDataGrid
        ref="dataGrid"
        :data-source="data"
        key-expr="ID"
        :show-borders="true"
        :rtl-enabled="true"
        :show-row-lines="true"
        :row-alternation-enabled="true"
    >
      <DxSorting mode="multiple"/>

      <DxColumn
          data-field="FullName"
          :caption="tableTitles.fullName"
      />
      <DxColumn
          data-field="Trade"
          :format="{ maximumFractionDigits: 2 }"
          data-type="number"
          :caption="tableTitles.tade"
          sort-order="desc"
      />
      <DxColumn data-field="Wage"
                :format="{ maximumFractionDigits: 2 }"
                data-type="number"
                :caption="tableTitles.wage"
                sort-order="desc"
      />
    </DxDataGrid>
  </Wrapper>

</template>

<style>
.dx-widget, .dx-datagrid{
  font-family: 'IRANSansWeb', sans-serif !important;
  padding: 1rem;
}
.dx-header-row > td{
  color: black;
  font-weight: 500;
  padding: 1rem 0.5rem !important;
}

.dx-data-row > td{
  padding: 1rem 1rem !important;
}

</style>


