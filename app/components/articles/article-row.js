import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null,
  articleState: null,
  autoSave: function() {
    var article = this.get('article');

    if(!article.get('isNew')) {
      this.sendAction('save', article);
    }
  },
  stateChanged: Ember.on('init', Ember.observer('article.state', function() {
    var article = this.get('article');

    if(article.get('isDirty') && !article.get('isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  }))
});
