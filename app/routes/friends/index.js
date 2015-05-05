import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    sortBy: {
      refreshModel: true
    },
    sortAscending: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.findQuery('friend', params);
  },
  actions: {
    delete: function(friend) {
      friend.destroyRecord();
      return false;
    }
  }
});
