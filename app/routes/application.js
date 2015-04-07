import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {id:1, song: 'La vida es un carvanal', singer: 'Celia Cruz'};
  }
});
