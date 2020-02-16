import Vue from '../../node_modules/vue/dist/vue.esm';
import VueRouter from '../../node_modules/vue-router/dist/vue-router.esm';

import highlight from 'vue-highlight-text/public/directive.min.js';

import Container from './blocks/Container';

Vue.use(VueRouter)

Vue.directive('highlight', highlight);

const routes = [
  {path: '/', name: '/', component: Container},
  {path: '/search/:keyword', name: 'search', component: Container},
];

const router = new VueRouter({routes});

export default () => new Vue({router}).$mount('#app');
