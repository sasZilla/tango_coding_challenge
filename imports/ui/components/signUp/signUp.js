import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './signUp.html';
import { Storage } from '../../services/storage.factory.js';

class SignUp {
  constructor($scope, $reactive, $state, storage) {
    'ngInject';

    $reactive(this).attach($scope);

    this._state = $state;
    this._storage = storage;
    let self = this;
    storage.getUser().then(function(user) {
      self.newUser = user.info;
      self.newUser.password = '';
      self.newUser.confirmPassword = '';
    });
  }

  createUser(user) {
    let self = this;
    self._storage.updateUser('info', {
      firstName: user.firstName,
      lastName: user.lastName,
      accountType: user.accountType,
      businessName: user.businessName,
      phone: user.phone,
      email: user.email,
      sendNews: user.sendNews,
      sendDeviceAlerts: user.sendDeviceAlerts,
      sendNps: user.sendNps
    }).then(function() {
      self._state.go('servAddress');
    });
  }
}

const name = 'signUp';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: SignUp
}).config(config)
  .service('storage', Storage);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('signUp', {
      url: '/signUp',
      template: '<sign-up></sign-up>'
    });
}
