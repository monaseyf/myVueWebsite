import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false

Vue.use(VueTypedJs)

new Vue({
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app')
