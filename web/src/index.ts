import Vue from 'vue';
import App from "./App.vue";
import VueRouter from "vue-router";
import {indexRouteMap} from './router';
import network from './utils/network';
Vue.use(VueRouter);
Vue.use(network)
const router = new VueRouter({
    routes: indexRouteMap
})
let vm = new Vue({
    render: h => h(App),
    router
}).$mount('#app');
