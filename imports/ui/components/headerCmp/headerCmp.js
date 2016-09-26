import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './headerCmp.html';

class HeaderCmp {}

const name = 'headerCmp';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: HeaderCmp
});
