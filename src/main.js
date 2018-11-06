import Vue from 'vue'
import VueCookies from 'vue-cookies'
import './plugins/vuetify'
import App from './App.vue'

// noinspection JSUnresolvedFunction
Vue.use(VueCookies);
Vue.config.productionTip = false;

// noinspection JSUnusedGlobalSymbols
new Vue({
    render: h => h(App)
}).$mount('#app');
