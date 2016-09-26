import { name as SignUp } from '../signUp';
import 'angular-mocks';

describe('SignUp', () => {
  beforeEach(() => {
    window.module(SignUp);
  });

  describe('controller', () => {
    let controller;
    let localStorage;
    const user = {
      firstName: 'Foo',
      lastName: 'Bar',
      accountType: 'business',
      businessName: 'FooBar',
      phone: '123-123-1234',
      email: 'user@email.com',
      sendNews: false,
      sendDeviceAlerts: false,
      sendNps: false,
      password: '1234567890',
      confirmPassword: '1234567890'
    };

    beforeEach(() => {
      inject(($rootScope, $componentController) => {
        controller = $componentController(SignUp, {
          $scope: $rootScope.$new(true)
        });
        localStorage = controller._storage;
        localStorage.clear();
      });
    });

    describe('createUser()', () => {
      it('should save', () => {
        controller.createUser(user);
        localStorage.getUser().then(function(user) {
          controller.newUser.password = '';
          controller.newUser.confirmPassword = '';
          expect(controller.newUser).toEqual(user.info);
        });
      });
    });
  });
});
