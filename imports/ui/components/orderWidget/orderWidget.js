import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './orderWidget.html';

class OrderWidget {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.quantity = '1';

    this.data = {
      title: 'iPhone 4s White',
      img: 'https://static.ting.com/shared/Apple-iPhone-4-White_small@2x.jpg',
      price: 138
    };
  }
}

const name = 'orderWidget';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: OrderWidget
});
