import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Serializer | i-i-s-book-club-заявка', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = run(() => store.createRecord('i-i-s-book-club-заявка', {}));
    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
