import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './billingInfo.html';
import { Storage } from '../../services/storage.factory.js';
import { name as CountryStates } from '../countryStates/countryStates';
import { name as ExpirationMonths } from '../expirationMonths/expirationMonths';
import { name as ExpirationYears } from '../expirationYears/expirationYears';

class BillingInfo {
  constructor($scope, $reactive, $state, storage, $location, $anchorScroll) {
    'ngInject';

    $reactive(this).attach($scope);
    this._storage = storage;
    this._location = $location;
    this._anchorScroll = $anchorScroll;
    let self = this;
    self.completed = false;
    storage.getUser().then(function(user) {
      self.address = user.address;
      self.user = user.info;
      self.billing = user.billing;
    });

    $scope.$watch(function(){
      return self.billing.expirationYears + '/' + self.billing.expirationMonths;
    }, function(newVal) {
      self.isValidDate = (new Date(newVal) >= new Date());
    });

    $scope.$watch(function(){
      return self.completed;
    }, function(newVal) {
      if (newVal) {
        $location.hash('background');
        $anchorScroll();
      }
    })
  }

  submit(billing, user, address) {
    let self = this;
    let data = {
      billing: {
        payMethod: billing.payMethod,
        cardholderName: billing.cardholderName,
        cardNumber: billing.cardNumber,
        expirationMonths: billing.expirationMonths,
        expirationYears: billing.expirationYears,
        cardCvv: billing.cardCvv
      },
      info: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
      address: {
        address: address.address,
        city: address.city,
        countryState: address.countryState,
        postalCode: address.postalCode,
        country: address.country
      }
    };

    self._storage.updateAll(data).then(function() {
      self.completed = true;
    });
  }
}

const name = 'billingInfo';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  CountryStates,
  ExpirationMonths,
  ExpirationYears
]).component(name, {
  template,
  controllerAs: name,
  controller: BillingInfo
}).config(config)
  .service('storage', Storage);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('billingInfo', {
      url: '/billingInfo',
      template: '<billing-info></billing-info>'
    });
}
