import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('friend', 'Friend', {
  needs: ['model:article']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(model);
});

test('fullName', function(assert) {
  var model = this.subject({ firstName: 'Syd', lastName: 'Barret' });

  assert.equal(model.get('fullName'), 'Syd Barret');

  Ember.run(function() {
    model.set('firstName', 'Baba');
  });

  assert.equal(model.get('fullName'), 'Baba Barret', 'Updates fullName');
});

test('articles relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles');
  assert.equal(relationship.kind, 'hasMany');
});
