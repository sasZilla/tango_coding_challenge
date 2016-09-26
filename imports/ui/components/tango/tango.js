import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './tango.html';
import { name as HeaderCmp } from '../headerCmp/headerCmp';
import { name as FooterCmp } from '../footerCmp/footerCmp';
import { name as Breadcrumb } from '../breadcrumb/breadcrumb';
import { name as OrderWidget } from '../orderWidget/orderWidget';
import { name as SignUp } from '../signUp/signUp';
import { name as ServAddress } from '../servAddress/servAddress';
import { name as BillingInfo } from '../billingInfo/billingInfo';

class Tango {}

const name = 'tango';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  HeaderCmp,
  FooterCmp,
  Breadcrumb,
  OrderWidget,
  SignUp,
  ServAddress,
  BillingInfo
]).component(name, {
  template,
  controllerAs: 'tango',
  controller: Tango
}).config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/signUp');
}
