import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Resources } from '../../services/resources.factory.js';
import { Storage } from '../../services/storage.factory.js';

import template from './resourceShowPage.html';

class ResourceShowPage {
  constructor($scope, $reactive, $stateParams, $state, Resources, Storage) {
    'ngInject';
    $reactive(this).attach($scope);
    this._storage = Storage;
    this._state = $state;
    this.data = Resources.find($stateParams.resourceId);
  }

  submit() {
    let self = this;
    self._storage.updateUser('order', this.data).then(function() {
      self._state.go('signUp');
    })

  }
}

const name = 'resourceShowPage';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: ResourceShowPage
}).config(config)
  .service('Resources', Resources)
  .service('Storage', Storage);;

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('resourceShowPage', {
      url: '/resourceShowPage/:resourceId',
      template: '<resource-show-page></resource-show-page>'
    });
}
