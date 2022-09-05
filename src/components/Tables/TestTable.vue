<script>
import {
  DxDataGrid,
  DxColumn,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow,
} from 'devextreme-vue/data-grid';
import DxSelectBox from 'devextreme-vue/select-box';
import DxCheckBox from 'devextreme-vue/check-box';

import service from '@/data/test.js';

const getOrderDay = (rowData) => (new Date(rowData.OrderDate)).getDay();

export default {
  components: {
    DxSelectBox,
    DxCheckBox,
    DxDataGrid,
    DxColumn,
    DxHeaderFilter,
    DxSearchPanel,
    DxFilterRow,
  },
  data() {
    const applyFilterTypes = [
      {
        key: 'auto',
        name: 'Immediately',
      },
      {
        key: 'onClick',
        name: 'On Button Click',
      }]; const
        currentFilter = applyFilterTypes[0].key;
    return {
      orders: service.getOrders(),
      showFilterRow: true,
      showHeaderFilter: true,
      applyFilterTypes,
      saleAmountEditorOptions: { format: 'currency', showClearButton: true },
      saleAmountHeaderFilter: [{
        text: 'Less than $3000',
        value: ['SaleAmount', '<', 3000],
      }, {
        text: '$3000 - $5000',
        value: [
          ['SaleAmount', '>=', 3000],
          ['SaleAmount', '<', 5000],
        ],
      }, {
        text: '$5000 - $10000',
        value: [
          ['SaleAmount', '>=', 5000],
          ['SaleAmount', '<', 10000],
        ],
      }, {
        text: '$10000 - $20000',
        value: [
          ['SaleAmount', '>=', 10000],
          ['SaleAmount', '<', 20000],
        ],
      }, {
        text: 'Greater than $20000',
        value: ['SaleAmount', '>=', 20000],
      }],
      calculateFilterExpression(value, selectedFilterOperations, target) {
        const column = this;
        if (target === 'headerFilter' && value === 'weekends') {
          return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
        }
        return column.defaultCalculateFilterExpression(value, selectedFilterOperations, target);
      },
      currentFilter,
      dataGridRefName: 'dataGrid',
    };
  },

};
</script>


<template>
  <div>
    <DxDataGrid
        id="gridContainer"
        :ref="dataGridRefName"
        :data-source="orders"
        key-expr="ID"
        :show-borders="true"
    >
      <DxFilterRow
          :visible="showFilterRow"
          :apply-filter="currentFilter"
      />
      <DxHeaderFilter
          :visible="showHeaderFilter"
      />

      <DxColumn data-field="Employee"/>
      <DxColumn
          data-field="CustomerStoreCity"
          caption="City"
      >
        <DxHeaderFilter :allow-search="false"/>
      </DxColumn>
    </DxDataGrid>
  </div>
</template>
