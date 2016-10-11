import angular from 'angular';
import _ from 'underscore';

const name = 'searchOrder';

function SearchOrder(resources, value) {
  return resources.sort((a,b) => {
    let nameOrder = value.split('_');
    let name = nameOrder[0];
    let order = nameOrder[1];

    if (order === 'ascending') {
      return a[name] > b[name];
    } else {
      return a[name] < b[name];
    }
  });
}

export default angular.module(name, [])
  .filter(name, () => {
    return SearchOrder;
  });
