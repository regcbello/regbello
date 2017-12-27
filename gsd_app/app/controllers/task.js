import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteTask: function(id) {
      var self = this
      this.store.findRecord('task', id).then(function(t) {
        console.log("Successfully found record to delete", t)
        t.deleteRecord()
        self.transitionToRoute('task')
      })
    }
  },
});
