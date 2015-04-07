import DS from 'ember-data';

var comment = DS.Model.extend({
  comment: DS.attr('string'),
  post: DS.belongsTo('post', {async: true})
});

comment.reopenClass({
  FIXTURES: [
    { id: 1, comment: 'This post is really good', post: 1},
    { id: 2, comment: 'This post was really useful', post: 1}
  ]
});
export default comment;