import { name as BillingInfo } from '../billingInfo';
import uiRouter from 'angular-ui-router';
import 'angular-mocks';

describe('BillingInfo', () => {
  beforeEach(() => {
    window.module(BillingInfo);
    window.module(uiRouter);
  });

  describe('controller', () => {
    let controller;
    let localStorage;
    const billing = {
      payMethod: 'visa',
      cardholderName: 'Aleksandr Osipov',
      cardNumber: '1234123412341234',
      expirationMonths: '10',
      expirationYears: '2016',
      cardCvv: '123'
    };
    const user = {
      firstName: 'Foo',
      lastName: 'Bar',
      accountType: 'business',
      businessName: 'FooBar',
      phone: '123-123-1234',
      email: 'user@email.com',
      sendNews: false,
      sendDeviceAlerts: false,
      sendNps: false
    };
    const address = {
      address: '605b FAIRLCHILD DR',
      city: 'Mountain View',
      countryState: 'CA',
      postalCode: '94043-2234'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(BillingInfo, {
          $scope: $rootScope.$new(true)
        });
        localStorage = controller._storage;
        localStorage.clear();
      });
    });

    describe('submit()', () => {
      it('should save', () => {
        controller.submit(billing, user, address)
        localStorage.getUser().then(function(user) {
          expect(controller.billing).toEqual(user.billing);
          expect(controller.user).toEqual(user.user);
          expect(controller.address).toEqual(user.address);
        });
      });
    });
  });
});
