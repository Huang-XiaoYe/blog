import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.js'
import ElementUI from 'element-ui'
import './assets/styles/reset.css'

Vue.config.productionTip = false

// 注册Element
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
	router
}).$mount('#app')
