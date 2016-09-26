import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './servAddress.html';
import { Storage } from '../../services/storage.factory.js';
import { name as CountryStates } from '../countryStates/countryStates';
import { name as  ServAddressPopup } from '../servAddressPopup/servAddressPopup';

class ServAddress {
  constructor($scope, $reactive, $state, storage) {
    'ngInject';

    $reactive(this).attach($scope);

    this._state = $state;
    this.submitted = false;

    let self = this;
    storage.getUser().then(function(user) {
      self.address = user.address;
    });
  }

  submit() {
    this.submitted = true;
  }
}

const name = 'servAddress';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  CountryStates,
  ServAddressPopup
]).component(name, {
  template,
  controllerAs: name,
  controller: ServAddress
}).config(config)
  .service('storage', Storage);


function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('servAddress', {
      url: '/servAddress',
      template: '<serv-address></serv-address>'
    });
}
