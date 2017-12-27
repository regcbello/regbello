import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    var existingTask = this.store.findRecord('task', params.id)
    existingTask.due_date = moment(existingTask.due_date).format("MM/DD/YYYY")
    return existingTask
  }
});
