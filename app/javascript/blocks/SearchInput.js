export default {
  name: 'search-input',
  props: ['keyword'],
  data: function(){
    return {};
  },
  template: `
    <input
      class="search-input"
      type="text"
      :value="keyword"
      v-on:input="$emit('keyword-change', $event.target.value)"
    >
  `,
};
