import angular from 'angular';

class Storage {
  constructor($q, $window) {
    'ngInject';

    this.name = 'tangoUser';

    this._q = $q;
    this._localStorage = $window.localStorage;
    this.defaults = {
      order: {},
      info: {
        sendNews: true,
        sendDeviceAlerts: true,
        sendNps: true
      },
      address: {
        country: 'US'
      },
      billing: {
        expirationMonths: '10',
        expirationYears: '2016',
        payMethod: 'american_express'
      }
    };
  }

  getUser() {
    let self = this;
    return self._q(function(resolve) {
      let user = angular.fromJson( self._localStorage.getItem(self.name) ) || self.defaults;
      resolve(user);
    });
  }

  updateUser(name, data) {
    let self = this;
    return this._q(function(resolve, reject) {
      let user = angular.fromJson( self._localStorage.getItem(self.name) ) || self.defaults;
      if (name && user[name] && data) {
        angular.merge(user[name], data);
        self._localStorage.setItem( self.name, angular.toJson(user) );
        resolve(user[name]);
      } else {
        reject();
      }
    });
  }

  updateAll(data) {
    let self = this;
    let results = Object.keys(data).map(function(name) {
      let attrs = data[name];
      return self.updateUser(name, attrs);
    });
    return self._q.all(results);
  }

  clear() {
    let self = this;
    return this._q(function(resolve) {
      self._localStorage.clear( self.name );
      resolve(true);
    });
  }
}

export {Storage}
