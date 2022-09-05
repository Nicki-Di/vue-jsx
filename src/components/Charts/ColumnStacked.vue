<script setup>
import {useThemeStore} from "@/stores/theme";
const store = useThemeStore()
import RangeDatePicker from '@/components/Auxiliary/RangeDatePicker.vue'
import Title from '@/components/Texts/Title.vue'
import Wrapper from '@/components/Common/Wrapper.vue'

const series = [{
  name: 'خرید',
  data: [44, 55, 41, 67, 22]
}, {
  name: 'فروش',
  data: [13, 23, 20, 8, 13]
}]

store.$subscribe(() => {
  chartOptions = {
    chart:{
      foreColor: store.isDark ? "#fff" : "#000",
    }
  }})



let chartOptions = $ref({
  chart: {
    type: 'bar',
    fontFamily: 'IRANSansWeb, sans-serif',
    foreColor: store.isDark ? "#fff" : "#000",
    background: "rgba(255, 255, 255, 0)",
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true
    }
  },
  dataLabels: {
    style: {
      colors: ["#000"]
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0,
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10
    },
  },
  xaxis: {
    categories: ['رانفور', 'سپیدار', 'مفاخر', 'رتاپ',
      'سیستم'
    ],
  },
  legend: {
    position: 'top',
  },
  colors: ['#67e8f9', '#f87171']
})

defineProps(['title'])

</script>

<template>
  <Wrapper id="chart">
    <Title weight="h2">{{title}}</Title>
    <RangeDatePicker/>
    <apexchart type="bar" height="300" width="550" :options="chartOptions" :series="series"/>
  </Wrapper>

</template>
<style>
.vue-apexcharts{
  width: fit-content;
  align-self: center;
}
.apexcharts-legend-series {
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.apexcharts-legend {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.apexcharts-tooltip-marker {
  margin: 0 4px;
}

.apexcharts-menu-icon:hover svg {
fill: #575757 !important;
}
</style>
