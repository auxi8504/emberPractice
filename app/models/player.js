import DS from 'ember-data';

var player = DS.Model.extend({
  name: DS.attr('string'),
  team: DS.belongsTo('team', {async: true})
});

player.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Alvaro Saborio', team: 1},
    { id: 2, name: 'Rolando Fonseca', team: 2}
  ]
});

export default player;