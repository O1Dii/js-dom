import { isString, isFunction, difference } from '../utils';

function removeClass(classes) {
  if (!isString(classes) && !isFunction(classes)) {
    return this;
  }

  this.each((item, index) => {
    const passedClasses = isFunction(classes) ? classes(index, item.className) : classes;

    if (!isString(passedClasses)) {
      return;
    }

    const toRemoveClasses = passedClasses.split(' ').filter(className => className);

    item.className.remove(...toRemoveClasses);
  });

  return this;
}

export default removeClass;
