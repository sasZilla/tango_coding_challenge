import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { name as SearchFilter } from '../../filters/searchFilter';
import { name as SearchOrder } from '../../filters/searchOrder';

import template from './searchItems.html';

class SearchItems {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
  }
}

const name = 'searchItems';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  SearchOrder,
  SearchFilter
]).component(name, {
  template,
  bindings: {
    items: '<',
    order: '<',
    filters: '<'
  },
  controllerAs: name,
  controller: SearchItems
})
