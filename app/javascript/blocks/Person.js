export default {
  name: 'person',
  props: [
    'name',
    'email',
    'title',
    'city',
    'address',
    'avatar',
    'keyword',
  ],
  data: function(){
    return {
      selected: false,
    };
  },
  computed: {
    buttonText: function(){
      return (this.selected ? 'Skip selection' : 'Mark as siutable').toUpperCase();
    }
  },
  methods: {
    switchSelect: function(){
      this.selected = !this.selected;
    },
  },
  template: `
    <section class="person" :class="{ 'person--selected': selected }">
      <img class="person__avatar" :src="avatar">
      <div class="person__info">
        <div class="person__container">
          <h2 class="person__name" v-highlight="{keyword: keyword}">{{ name }}</h2>
          <p class="person__email" v-highlight="{keyword: keyword}">{{ email }}</p>
        </div>
        <h4 class="person__title" v-highlight="{keyword: keyword}">{{ title }}</h4>
        <p class="person__address" v-highlight="{keyword: keyword}">{{ address }}, {{ city }}</p>
        <button class="person__button" type="button" v-on:click="switchSelect">{{ buttonText }}</button>
      </div>
    </section>
  `,
};
