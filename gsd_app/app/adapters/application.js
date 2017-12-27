import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "tasks.json?jsonp=?",
  shouldReloadAll() { return true }
});
