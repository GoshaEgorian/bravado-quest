import Vue from '../../node_modules/vue/dist/vue.esm';

import virtualList from '../../node_modules/vue-virtual-scroll-list/dist/index';
import highlight from 'vue-highlight-text/public/directive.min.js';

import Person from './blocks/Person';
import SearchInput from './blocks/SearchInput';

import get from './helpers/get';

Vue.directive('highlight', highlight);

export default () => new Vue({
  el: '#app',
  data: {
    users: [],
    keyword: '',
    size: 136 + 21,
  },
  computed: {
    remain: function(){
      const freeHeight = window.innerHeight - (50 + 12 * 2);
      return Math.floor(freeHeight / this.size);
    },
    filtered: function(){
      const {users, keyword} = this;

      if (keyword === '') return users;

      return  users.filter(({
        name,
        email,
        title,
        city,
        address,
      }) =>
        name.includes(keyword) ||
        email.includes(keyword) ||
        title.includes(keyword) ||
        city.includes(keyword) ||
        address.includes(keyword)
      );
    },
  },
  created: function(){
    get('/users').then(res => (this.users = res));
  },
  components: {
    'person': Person,
    'search-input': SearchInput,
    'virtual-list': virtualList,
  },
});
