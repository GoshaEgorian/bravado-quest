import Vue from '../../node_modules/vue/dist/vue.esm';
import virtualList from '../../node_modules/vue-virtual-scroll-list/dist/index';

import Person from './blocks/Person';
import get from './helpers/get';

export default () => new Vue({
  el: '#app',
  data: {
    users: [],
  },
  created: function(){
    get('users.json').then(res => (this.users = res));
  },
  components: {
    'person': Person,
    'virtual-list': virtualList,
  },
});
