import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './toggleFilters.html';

class ToggleFilters {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
  }

  toggle() {
    this.opened = !this.opened;
  }
}

const name = 'toggleFilters';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    opened: '='
  },
  controllerAs: name,
  controller: ToggleFilters
});
