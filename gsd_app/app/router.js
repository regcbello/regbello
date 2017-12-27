import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("home")
  this.route("about")
  this.route("task", function() {
    this.route('new');
    this.route('edit', {path: '/edit/:id'});
    this.route('delete');
  })
});

export default Router;
