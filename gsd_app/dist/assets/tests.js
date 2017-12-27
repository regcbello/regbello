'use strict';

define('todo/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/task.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/task.js should pass ESLint\n\n8:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/task/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/task/edit.js should pass ESLint\n\n9:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/task/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/task/new.js should pass ESLint\n\n7:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('helpers/due_date.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/due_date.js should pass ESLint\n\n4:12 - \'moment\' is not defined. (no-undef)');
  });

  QUnit.test('helpers/format_date.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/format_date.js should pass ESLint\n\n4:10 - \'moment\' is not defined. (no-undef)');
  });

  QUnit.test('helpers/to_mmddyyyy.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/to_mmddyyyy.js should pass ESLint\n\n4:10 - \'moment\' is not defined. (no-undef)');
  });

  QUnit.test('models/task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/task.js should pass ESLint\n\n');
  });

  QUnit.test('routes/task/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/task/edit.js should pass ESLint\n\n6:29 - \'moment\' is not defined. (no-undef)');
  });

  QUnit.test('routes/task/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/task/new.js should pass ESLint\n\n');
  });
});
define('todo/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('todo/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'todo/tests/helpers/start-app', 'todo/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('todo/tests/helpers/resolver', ['exports', 'todo/resolver', 'todo/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('todo/tests/helpers/start-app', ['exports', 'todo/app', 'todo/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('todo/tests/test-helper', ['todo/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('todo/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/delete-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/delete-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/task/delete-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/task/delete-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/task/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/task/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/task/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/task/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/tasks-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/tasks-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/task/delete-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/task/delete-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/task/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/task/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/task/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/task/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/tasks-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tasks-test.js should pass ESLint\n\n');
  });
});
define('todo/tests/unit/controllers/delete-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:delete', 'Unit | Controller | delete', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('todo/tests/unit/controllers/task/delete-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:task/delete', 'Unit | Controller | task/delete', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('todo/tests/unit/controllers/task/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:task/edit', 'Unit | Controller | task/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('todo/tests/unit/controllers/task/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:task/new', 'Unit | Controller | task/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('todo/tests/unit/controllers/tasks-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:tasks', 'Unit | Controller | tasks', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('todo/tests/unit/routes/task/delete-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:task/delete', 'Unit | Route | task/delete', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('todo/tests/unit/routes/task/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:task/edit', 'Unit | Route | task/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('todo/tests/unit/routes/task/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:task/new', 'Unit | Route | task/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('todo/tests/unit/routes/tasks-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:tasks', 'Unit | Route | tasks', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('todo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
