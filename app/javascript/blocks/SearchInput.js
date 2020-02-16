export default {
  name: 'search-input',
  data: function(){
    return {
      text: '',
    };
  },
  template: `<input class="search-input" type="text" v-model="text" v-on:input="$emit('keyword-change', text)" />`
};
