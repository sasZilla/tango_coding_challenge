import { name as ServAddressPopup } from '../servAddressPopup';
import uiRouter from 'angular-ui-router';
import 'angular-mocks';

describe('ServAddressPopup', () => {
  beforeEach(() => {
    window.module(ServAddressPopup);
    window.module(uiRouter);
  });

  describe('controller', () => {
    let controller;
    let localStorage;
    const address = {
      address: '605b FAIRLCHILD DR',
      city: 'Mountain View',
      countryState: 'CA',
      postalCode: '94043-2234'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(ServAddressPopup, {
          $scope: $rootScope.$new(true)
        });
        localStorage = controller._storage;
        localStorage.clear();
      });
    });

    describe('submit()', () => {
      it('should save', () => {
        controller.submit(address);
        localStorage.getUser().then(function(user) {
          expect(controller.address).toEqual(user.address);
        });
      });
    });
  });
});
