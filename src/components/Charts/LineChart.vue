<script setup>
import {useThemeStore} from "@/stores/theme";
import Wrapper from '@/components/Common/Wrapper.vue'

const store = useThemeStore()
store.$subscribe(() => {
  chartOptions = {
    chart:{
      foreColor: store.isDark ? "#fff" : "#000",
    }
  }})
const series = [
  {
    name: "کل کاربران",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "کاربران آنلاین",
    data: [12, 11, 14, 18, 17, 13, 13]
  },

  {
    name: "کاربران فعال",
    data: [9, 4, 15, 11, 7, 12, 6]
  }
]
let chartOptions = $ref({
  chart: {
    type: 'line',
    foreColor: store.isDark ? "#fff" : "#000",
    fontFamily: 'IRANSansWeb, sans-serif',
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true
    }
  },
  colors: ['#545454','#0084ff', '#68cf29'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#67e8f9', '#fff'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'ماه',
      style: {
        fontSize: '16px',
        fontWeight: 500,
      },
    }
  },
  yaxis: {
    title: {
      text: 'تعداد',
      offsetX: -30,
      offsetY: 0,
      style: {
        fontSize: '16px',
        fontWeight: 500,
      },
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: 16,
    markers: {
      radius: 2,
    },
    itemMargin: {
      vertical: 6
    },
  }
})
</script>

<template>
  <Wrapper id="chart">
    <apexchart type="line" height="390" width="550" :options="chartOptions" :series="series"/>
  </Wrapper>
</template>

<style>

</style>