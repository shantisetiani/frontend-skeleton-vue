import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Antd from 'ant-design-vue'

import router from './routes/index';

import "./styles/index.scss";
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueRouter)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');