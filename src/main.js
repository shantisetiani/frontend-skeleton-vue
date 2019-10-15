import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Antd from 'ant-design-vue'


import routes from './routes/index';

import "./styles/index.scss";
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueRouter)

const router = new VueRouter({routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');