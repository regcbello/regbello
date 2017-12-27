import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editTask: function(id) {
      var self = this
      var newTitle = this.get('model.title')
      var newDueDate = this.get('model.due_date')
      console.log("New title and dueDate", newTitle, newDueDate)
      this.store.findRecord('task', id).then(function(t) {
        t.set('title', newTitle)
        t.set('due_date', newDueDate)
        t.save()
        self.transitionToRoute('task')
      });
    }
  }
});
