import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Batman', 'Superman', 'Wonder Woman'];
  }
});
