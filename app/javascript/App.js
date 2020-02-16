import Vue from '../../node_modules/vue/dist/vue.esm';
import virtualList from '../../node_modules/vue-virtual-scroll-list/dist/index';

import Person from './blocks/Person';
import get from './helpers/get';

export default () => new Vue({
  el: '#app',
  data: {
    users: [],
    size: 136,
  },
  computed: {
    remain: function(){
      return Math.floor(window.innerHeight / this.size);
    }
  },
  created: function(){
    get('/users').then(res => (this.users = res));
  },
  components: {
    'person': Person,
    'virtual-list': virtualList,
  },
});
