import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  LOG_TRANSITIONS: true
});

loadInitializers(App, config.modulePrefix);

export default App;

/*
  Using fixture adapter
  player and team models were created (async)
  Some fixtures were defined in the models
  teams and players routes were created
  Using each helper
  What is we change the adapter to RESTAdapter?
*/