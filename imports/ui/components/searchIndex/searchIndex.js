import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { name as SearchFilters } from '../searchFilters/searchFilters';
import { name as SearchItems } from '../searchItems/searchItems';
import { name as SearchFaq } from '../searchFaq/searchFaq';
import { name as ToggleFilters } from '../toggleFilters/toggleFilters';
import { Resources } from '../../services/resources.factory.js';

import template from './searchIndex.html';

class searchIndex {
  constructor($scope, $reactive, $state, Resources) {
    'ngInject';
    $reactive(this).attach($scope);
    this._state = $state;
    this.data = Resources.peekAll();
    this.openedFilters = true;
    this.order = 'price_ascending';
  }
}

const name = 'searchIndex';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ToggleFilters,
  SearchFilters,
  SearchItems,
  SearchFaq
]).component(name, {
  template,
  controllerAs: name,
  controller: searchIndex
}).config(config)
  .service('Resources', Resources);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('searchIndex', {
      url: '/searchIndex',
      template: '<search-index></search-index>'
    });
}
