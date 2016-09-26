import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './breadcrumb.html';

class Breadcrumb {
  constructor($scope, $reactive, $state) {
    'ngInject';

    $reactive(this).attach($scope);
    this._state = $state;
    this.currState = $state.$current.name;
    this.data = [
      {index: 1, name: 'Service address', state: 'servAddress'},
      {index: 2, name: 'Billing', state: 'billingInfo'},
      {index: 3, name: 'Shipping', state: null},
      {index: 4, name: 'Confirmation', state: null}
    ];

    let self = this;
    $scope.$watch(function(){
      return $state.$current.name;
    }, function(newVal, oldVal){
      self.currState = newVal;
    });
  }

  cancel() {
    this._state.go('signUp');
  }
}

const name = 'breadcrumb';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: Breadcrumb
});
