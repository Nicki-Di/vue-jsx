import {createApp} from 'vue'
import "./assets/index.css"
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import VueApexCharts from "vue3-apexcharts";
import 'devextreme/dist/css/dx.light.css';
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueApexCharts)




app.mount('#app')
