import angular from 'angular';
import { Meteor } from 'meteor/meteor';
import { name as Tango } from '../imports/ui/components/tango/tango';

function onReady() {
  angular.bootstrap(document, [
    Tango
  ]
  , {
    strictDi: true
  }
  );
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
