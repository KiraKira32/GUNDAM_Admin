import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// SCSS & axios
import './assets/all.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 時間格式化
import moment from 'moment'
import { date, currency } from '../src/methods/fillters';

// loading 
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';



const app = createApp(App)

// 日期格式化
app.config.globalProperties.$moment = moment
// 時間、金錢格式化
app.config.globalProperties.$filters = {
  date,
  currency,
};

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)
app.use(moment)

// eslint-disable-next-line vue/multi-word-component-names
app.component('Loading', Loading);

app.mount('#app')

