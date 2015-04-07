import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('songs');
  this.resource('posts', function() {
    this.route('new');
    this.resource('comments', function() {
      this.route('new');
    });
  });
  this.resource('cards', function() {
    this.route('new');
  });

  this.route('card', function() {
    this.route('new');
  });
  this.resource('teams', function() {});
  this.resource('players', function() {});
});

export default Router;
