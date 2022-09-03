<script setup>
import {useThemeStore} from "@/stores/theme";
import RangeDatePicker from '@/components/RangeDatePicker.vue'
import Title from '@/components/Texts/Title.vue'

const series = [76, 67, 61, 90]
const store = useThemeStore()
store.$subscribe(() => {
  chartOptions = {
    plotOptions:{
      radialBar:{
        dataLabels: {
          value: {
            color:  store.isDark ? "#fff" : "#000",
          }
        }
      }
    }
  }})

let chartOptions = $ref({
      chart: {
        type: 'radialBar',
        fontFamily: 'IRANSansWeb, sans-serif',

      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: true,
              offsetY: 10,
              fontSize: '16px',
              color:  store.isDark ? "#fff" : "#000",
            },
            total: {
              show: true,
              formatter: () => {
                return 'کل: ' + series.reduce((a, b) => {
                  return a + b
                }, 0)
              }
            }
          },
        }
      },
      colors: ['#67e8f9', '#0084ff', '#39539E', '#0077B5'],
      labels: ['دارت', 'اسمارت', 'پیشرفته', 'الگوریتم'],
      legend: {
        show: true,
        floating: false,
        fontSize: '16px',
        position: 'left',
        offsetX: 170,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          radius:2
        },

        formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
})

defineProps(['title'])

</script>

<template>
  <div id="chart" class="basis-1/2 flex flex-col gap-6 rounded-lg shadow p-4 " :class="store.isDark ? 'bg-primary-1' : 'bg-white'">
    <Title>{{title}}</Title>
    <RangeDatePicker/>
    <apexchart type="radialBar" height="400" width="550" :options="chartOptions" :series="series"/>
  </div>

</template>
