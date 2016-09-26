import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './expirationYears.html';

class ExpirationYears {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.data = [{"value":"2016","title":"2016"},{"value":"2017","title":"2017"},{"value":"2018","title":"2018"},{"value":"2019","title":"2019"},{"value":"2020","title":"2020"},{"value":"2021","title":"2021"},{"value":"2022","title":"2022"},{"value":"2023","title":"2023"},{"value":"2024","title":"2024"},{"value":"2025","title":"2025"},{"value":"2026","title":"2026"}];
    if (!this.value) {
      this.value = this.data[0].value;
    }
  }
}

const name = 'expirationYears';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    value: '='
  },
  controllerAs: name,
  controller: ExpirationYears
});
