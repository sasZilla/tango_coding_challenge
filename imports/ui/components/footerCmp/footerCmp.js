import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './footerCmp.html';

class FooterCmp {}

const name = 'footerCmp';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: FooterCmp
});
