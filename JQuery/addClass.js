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
      const newClasses = passedClasses.split(' ').filter(className => className);

      item.classList.add(...newClasses);
    } else {
      item.className = passedClasses;
    }
  });

  return this;
}

export default addClass;
