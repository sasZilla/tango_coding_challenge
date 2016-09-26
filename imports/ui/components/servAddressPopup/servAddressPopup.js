import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './servAddressPopup.html';
import { Storage } from '../../services/storage.factory.js';

class ServAddressPopup {
  constructor($scope, $reactive, $state, storage) {
    'ngInject';

    $reactive(this).attach($scope);
    this._state = $state;
    this._storage = storage;
  }

  submit(address) {
    let self = this;
    self._storage.updateUser('address', {
      address: address.address,
      city: address.city,
      countryState: address.countryState,
      postalCode: address.postalCode
    }).then(function() {
      self._state.go('billingInfo');
    });
  }

  close() {
    this.submitted = false;
  }
}

const name = 'servAddressPopup';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    submitted: '=',
    address: '<'
  },
  controllerAs: name,
  controller: ServAddressPopup
})
  .service('storage', Storage);
