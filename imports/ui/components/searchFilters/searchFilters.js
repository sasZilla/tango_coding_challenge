import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './searchFilters.html';

class SearchFilters {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.sortFilterOptions = [
      {
        value: 'price_ascending',
        title: 'Sort - $ - $$$'
      },
      {
        value: 'price_descending',
        title: 'Sort - $$$ - $'
      },
      {
        value: 'name_ascending',
        title: 'Sort - A - Z'
      },
      {
        value: 'name_descending',
        title: 'Sort - Z - A'
      }
    ];
    if (!this.order) {
      this.order = this.sortFilterOptions[0].value;
    }

    this.filters = [
      {
        title: null,
        name: 'sale',
        options: ['On sale'].map(function(item){ return { value: item, selected: false }; })
      },
      {
        title: 'Networks',
        name: 'network',
        options: ['GSM', 'CDMA'].map(function(item){ return { value: item, selected: false }; })
      },
      {
        title: 'Conditions',
        name: 'condition',
        options: ['New', 'Refurbished'].map(function(item){ return { value: item, selected: false }; })
      },
      {
        title: 'Types',
        name: 'type',
        options: ['Smartphone', 'Feature phone', 'Hotspot', 'Accessory', 'Other'].map(function(item){ return { value: item, selected: false }; })
      },
      {
        title: 'Brands',
        name: 'brand',
        options: ['Apple', 'Samsung', 'Alcatel', 'BLU', 'Huawei', 'Kyocera', 'LG', 'Motorola'].map(function(item){ return { value: item, selected: false }; })
      }
    ];
  }
}

const name = 'searchFilters';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  bindings: {
    opened: '<',
    order: '=?',
    filters: '=',
  },
  controllerAs: name,
  controller: SearchFilters
});
