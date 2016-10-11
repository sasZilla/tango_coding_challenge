import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './searchFaq.html';

class SearchFaq {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
  }
}

const name = 'searchFaq';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: SearchFaq
})
