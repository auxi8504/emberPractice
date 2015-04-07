import DS from 'ember-data';
import comment from './posts/comment';

var post = DS.Model.extend({
  content: DS.attr('string'),
  comments: DS.hasMany('comment', {async: true})
});

post.reopenClass({
  FIXTURES: [
    { id: 1, content: 'This is a post related with ember.js'}
  ]
});

export default post;