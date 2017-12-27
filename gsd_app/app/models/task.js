import DS from 'ember-data';

var attr = DS.attr

export default DS.Model.extend({
  title: attr('string'),
  due_date: attr('date'),
  created_at: attr('date'),
  completed: attr('boolean')
});
