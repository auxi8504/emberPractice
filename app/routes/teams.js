import Ember from 'ember';

export default Ember.Route.extend({
  // model: function () {
  //   return  [
  //     {id:1, name:'Saprissa'},
  //     {id:1, name:'LDA'},
  //     {id:1, name:'Cartago'}
  //   ];
  // }
  model: function () {
    return this.store.find('team');
  }
});
