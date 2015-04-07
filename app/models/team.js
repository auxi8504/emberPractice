import DS from 'ember-data';

var team = DS.Model.extend({
  name: DS.attr('string'),
  players: DS.hasMany('player', {async: true})
});

team.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Saprissa', players:[1]},
    { id: 2, name: 'LDA', players: [2]}
  ]
});

export default team;
