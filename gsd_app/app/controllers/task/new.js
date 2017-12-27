import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    newTask: function() {
      var self = this
      console.log(self)
      var rand = Math.floor((Math.random() * 100000) + 1);
      var newTask = this.store.createRecord('task', {
        id: rand,
        title: this.get("title"),
        due_date: this.get("dueDate")
      })
      newTask.save()
      self.transitionToRoute('task')
    }
  }
});
