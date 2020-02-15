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
    <div>
      <p>{{ name }}</p>
      <p>{{ email }}</p>
      <p>{{ title }}</p>
      <p>{{ city }}</p>
      <p>{{ address }}</p>
      <p>{{ avatar }}</p>
    </div>
  `,
};
