export default {
  name: 'person',
  props: [
    'name',
    'email',
    'title',
    'city',
    'address',
    'avatar',
  ],
  data: function(){
    return {};
  },
  template: `
    <section class="person">
      <img class="person__avatar" v-bind:src="avatar">
      <div class="person__info">
        <h2 class="person__name">{{ name }}</h2>
        <h4 class="person__title">{{ title }}</h4>
        <p class="person__address">{{ address }}, {{ city }}</p>
      </div>
      <p class="person__email">{{ email }}</p>
    </section>
  `,
};
