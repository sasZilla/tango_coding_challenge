import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './expirationMonths.html';

class ExpirationMonths {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.data = [{"value":"01","title":"January"},{"value":"02","title":"February"},{"value":"03","title":"March"},{"value":"04","title":"April"},{"value":"05","title":"May"},{"value":"06","title":"June"},{"value":"07","title":"July"},{"value":"08","title":"August"},{"value":"09","title":"September"},{"value":"10","title":"October"},{"value":"11","title":"November"},{"value":"12","title":"December"}];
    if (!this.value) {
      this.value = this.data[0].value;
    }
  }
}

const name = 'expirationMonths';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    value: '='
  },
  controllerAs: name,
  controller: ExpirationMonths
});
