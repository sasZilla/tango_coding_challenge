import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Storage } from '../../services/storage.factory.js';

import template from './orderWidget.html';

class OrderWidget {
  constructor($scope, $reactive, Storage, $state) {
    'ngInject';

    $reactive(this).attach($scope);

    this.quantity = '1';

    this._storage = Storage;
    let self = this;
    $scope.$watch(function(){
      return $state.current.name === 'resourceShowPage' && $state.current.name === 'searchIndex'
    }, function(isSearch) {
      if (!isSearch) {
        self._storage.getUser().then(function(user) {
          self.data = user.order;
        });
      }
    });
  }
}

const name = 'orderWidget';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: OrderWidget
}).service('Storage', Storage);
