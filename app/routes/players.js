import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      players: this.store.find('player'),
      teams: this.store.find('team')
    }
  }
});
