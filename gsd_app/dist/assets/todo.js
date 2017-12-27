"use strict";



define("todo/adapters/application", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTAdapter.extend({
    host: "tasks.json?jsonp=?",
    shouldReloadAll: function shouldReloadAll() {
      return true;
    }
  });
});
define('todo/app', ['exports', 'todo/resolver', 'ember-load-initializers', 'todo/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('todo/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('todo/controllers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    actions: {
      deleteTask: function deleteTask(id) {
        var self = this;
        this.store.findRecord('task', id).then(function (t) {
          console.log("Successfully found record to delete", t);
          t.deleteRecord();
          self.transitionToRoute('task');
        });
      }
    }
  });
});
define('todo/controllers/task/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    actions: {
      editTask: function editTask(id) {
        var self = this;
        var newTitle = this.get('model.title');
        var newDueDate = this.get('model.due_date');
        console.log("New title and dueDate", newTitle, newDueDate);
        this.store.findRecord('task', id).then(function (t) {
          t.set('title', newTitle);
          t.set('due_date', newDueDate);
          t.save();
          self.transitionToRoute('task');
        });
      }
    }
  });
});
define('todo/controllers/task/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    actions: {
      newTask: function newTask() {
        var self = this;
        console.log(self);
        var rand = Math.floor(Math.random() * 100000 + 1);
        var newTask = this.store.createRecord('task', {
          id: rand,
          title: this.get("title"),
          due_date: this.get("dueDate")
        });
        newTask.save();
        self.transitionToRoute('task');
      }
    }
  });
});
define('todo/helpers/app-version', ['exports', 'todo/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('todo/helpers/due_date', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.dueDate = dueDate;
    function dueDate(params) {
        return moment(new Date()).to(params[0]);
    }

    exports.default = Ember.Helper.helper(dueDate);
});
define('todo/helpers/format_date', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.formatDate = formatDate;
  function formatDate(params) {
    return moment(params[0]).fromNow();
  }

  exports.default = Ember.Helper.helper(formatDate);
});
define('todo/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('todo/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('todo/helpers/to_mmddyyyy', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.to_mmddyyyy = to_mmddyyyy;
  function to_mmddyyyy(params) {
    return moment(params[0]).format('MM/DD/YYYY');
  }

  exports.default = Ember.Helper.helper(to_mmddyyyy);
});
define('todo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'todo/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('todo/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('todo/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('todo/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('todo/initializers/export-application-global', ['exports', 'todo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('todo/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('todo/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('todo/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("todo/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('todo/models/task', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var attr = _emberData.default.attr;

  exports.default = _emberData.default.Model.extend({
    title: attr('string'),
    due_date: attr('date'),
    created_at: attr('date'),
    completed: attr('boolean')
  });
});
define('todo/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('todo/router', ['exports', 'todo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route("home");
    this.route("about");
    this.route("task", function () {
      this.route('new');
      this.route('edit', { path: '/edit/:id' });
      this.route('delete');
    });
  });

  exports.default = Router;
});
define('todo/routes/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model() {
      return this.store.findAll('task');
    }
  });
});
define('todo/routes/task/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model(params) {
      var existingTask = this.store.findRecord('task', params.id);
      existingTask.due_date = moment(existingTask.due_date).format("MM/DD/YYYY");
      return existingTask;
    }
  });
});
define('todo/routes/task/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('todo/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("todo/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZPZz+0/1", "block": "{\"symbols\":[],\"statements\":[[6,\"html\"],[7],[0,\"\\n\"],[6,\"head\"],[7],[0,\"\\n  \"],[6,\"script\"],[9,\"src\",\"https://use.fontawesome.com/26af1c2a4b.js\"],[7],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"body\"],[7],[0,\"\\n\"],[6,\"nav\"],[9,\"class\",\"navbar navbar-expand-lg navbar-light bg-light\"],[7],[0,\"\\n  \"],[6,\"a\"],[9,\"class\",\"navbar-brand\"],[9,\"href\",\"#\"],[7],[0,\"Get Shit Done\"],[8],[0,\"\\n  \"],[6,\"button\"],[9,\"class\",\"navbar-toggler\"],[9,\"type\",\"button\"],[9,\"data-toggle\",\"collapse\"],[9,\"data-target\",\"#navbarSupportedContent\"],[9,\"aria-controls\",\"navbarSupportedContent\"],[9,\"aria-expanded\",\"false\"],[9,\"aria-label\",\"Toggle navigation\"],[7],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"navbar-toggler-icon\"],[7],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"navbarSupportedContent\"],[7],[0,\"\\n    \"],[6,\"ul\"],[9,\"class\",\"navbar-nav mr-auto\"],[7],[0,\"\\n      \"],[6,\"li\"],[9,\"class\",\"nav-item\"],[7],[0,\"\\n        \"],[4,\"link-to\",[\"home\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\" Home \"]],\"parameters\":[]},null],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"li\"],[9,\"class\",\"nav-item\"],[7],[0,\"\\n        \"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\" About \"]],\"parameters\":[]},null],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"li\"],[9,\"class\",\"nav-item\"],[7],[0,\"\\n        \"],[4,\"link-to\",[\"task\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\" Tasks \"]],\"parameters\":[]},null],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"container app\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "todo/templates/application.hbs" } });
});
define("todo/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fX1DWXTv", "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}", "meta": { "moduleName": "todo/templates/home.hbs" } });
});
define("todo/templates/task", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EG2jiWlG", "block": "{\"symbols\":[\"t\"],\"statements\":[[6,\"h3\"],[7],[0,\"Tasks\"],[8],[0,\"\\n\\n\"],[4,\"link-to\",[\"task.new\"],null,{\"statements\":[[0,\" Create New Task \"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"hr\"],[7],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"ul\"],[9,\"class\",\"tasks list-group\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[9,\"class\",\"list-group-item d-flex justify-content-between align-items-center\"],[7],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"font-italic text-muted\"],[7],[0,\"created \"],[1,[25,\"format_date\",[[19,1,[\"created_at\"]]],null],false],[8],[0,\"\\n      \"],[6,\"h6\"],[9,\"class\",\"task-title\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"badge badge-info\"],[7],[0,\"Due \"],[1,[25,\"due_date\",[[19,1,[\"due_date\"]]],null],false],[8],[0,\"\\n      \"],[4,\"link-to\",[\"task.edit\",[19,1,[\"id\"]]],null,{\"statements\":[[6,\"span\"],[9,\"class\",\"fa fa-pencil-square-o fa-lg\"],[9,\"aria-hidden\",\"true\"],[7],[8]],\"parameters\":[]},null],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"submit\"],[3,\"action\",[[19,0,[]],\"deleteTask\",[19,1,[\"id\"]]],[[\"on\"],[\"click\"]]],[7],[0,\"\\n      \"],[6,\"span\"],[9,\"class\",\"fa fa-trash fa-lg\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "todo/templates/task.hbs" } });
});
define("todo/templates/task/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BBCLIYUk", "block": "{\"symbols\":[],\"statements\":[[2,\" Input form \"],[0,\"\\n\"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"editTask\",[20,[\"model\",\"id\"]]],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    \"],[6,\"label\"],[9,\"for\",\"task-title\"],[7],[0,\"Title\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"value\",\"type\",\"class\",\"id\"],[[20,[\"model\",\"title\"]],\"text\",\"form-control\",\"task-title\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    \"],[6,\"label\"],[9,\"for\",\"task-due-date\"],[7],[0,\"Due Date\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"value\",\"type\",\"class\",\"id\"],[[20,[\"model\",\"due_date\"]],\"date\",\"form-control\",\"task-due-date\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"class\"],[\"submit\",\"New Task\",\"btn btn-success\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "todo/templates/task/edit.hbs" } });
});
define("todo/templates/task/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OmVQJQTP", "block": "{\"symbols\":[],\"statements\":[[2,\" Input form \"],[0,\"\\n\"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"newTask\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    \"],[6,\"label\"],[9,\"for\",\"task-title\"],[7],[0,\"Title\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"value\",\"type\",\"class\",\"id\"],[[20,[\"title\"]],\"text\",\"form-control\",\"task-title\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    \"],[6,\"label\"],[9,\"for\",\"task-due-date\"],[7],[0,\"Due Date\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"value\",\"type\",\"class\",\"id\"],[[20,[\"dueDate\"]],\"date\",\"form-control\",\"task-due-date\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"class\"],[\"submit\",\"New Task\",\"btn btn-success\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "todo/templates/task/new.hbs" } });
});


define('todo/config/environment', [], function() {
  var prefix = 'todo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("todo/app")["default"].create({"name":"todo","version":"0.0.0+fc07634d"});
}
//# sourceMappingURL=todo.map
