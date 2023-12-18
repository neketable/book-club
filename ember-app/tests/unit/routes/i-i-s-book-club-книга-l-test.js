import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | i-i-s-book-club-книга-l', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let route = this.owner.lookup('route:i-i-s-book-club-книга-l');
    assert.ok(route);
  });
});
