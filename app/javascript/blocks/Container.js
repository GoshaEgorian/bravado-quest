import virtualList from '../../../node_modules/vue-virtual-scroll-list/dist/index';

import Person from './Person';
import SearchInput from './SearchInput';

import get from '../helpers/get';

export default {
  data: function(){
    return {
      users: [],
      size: 136 + 21,
    };
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
    keyword: function(){
      return this.$route.params.keyword || '';
    }
  },
  methods: {
    setKeyword: function(text){
      if (text !== '') {
        this.$router.push({name: 'search', params: {keyword: text}});
      } else {
        this.$router.push({name: '/'});
      }
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
  template: `
    <section class="app__container">
      <search-input v-on:keyword-change="setKeyword" :keyword="keyword" />

      <virtual-list :size="size" :remain="remain">
        <person
          v-for="user in filtered"
          :key="user.email"
          :name="user.name"
          :email="user.email"
          :title="user.title"
          :city="user.city"
          :address="user.address"
          :avatar="user.avatar"
          :keyword="keyword">
        </person>
      </virtual-list>
    </section>
  `,
};
