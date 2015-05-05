import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  isValid: Ember.computed.and(
    'hasDescription'
  ),
  actions: {
    save: function() {
      if(this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'Description cannot be blank.');
        return false;
      }
    }
  }
});
