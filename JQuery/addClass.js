import { isString, isFunction, uniq } from '../utils';

function addClass(classes) {
  if (!isString(classes) && !isFunction(classes)) {
    return this;
  }

  this.each((item, index) => {
    const passedClasses = isFunction(classes) ? classes(index, item.className) : classes;

    if (!isString(passedClasses)) {
      return;
    }

    if (item.className) {
      const existClasses = item.className.split(' ').filter(className => className);
      const newClasses = passedClasses.split(' ').filter(className => className);

      item.className = uniq(existClasses, newClasses).join(' ');
    } else {
      item.className = passedClasses;
    }
  });

  return this;
}

export default addClass;
