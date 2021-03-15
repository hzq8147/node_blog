import Vue from 'vue';
import App from "./App.vue";
import VueRouter from "vue-router";
import {indexRouteMap} from './router';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: indexRouteMap
})
let vm = new Vue({
    render: h => h(App),
    router
}).$mount('#app');
