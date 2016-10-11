import angular from 'angular';
import _ from 'underscore';

const name = 'searchFilter';

function SearchFilter(resources, filters) {
  if (!_.any(filters, (filter) => {
    return _.any(filter.options, (option) => {
      return option.selected;
    });
  })) { return resources; }

  return resources.filter((resource) => {
    return _.any(filters, (filter) => {
      return _.any(filter.options, (option) => {
        return option.value === resource[filter.name] && option.selected
      });
    })
  });
}

export default angular.module(name, [])
  .filter(name, () => {
    return SearchFilter;
  });
