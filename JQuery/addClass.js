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

    const newClasses = passedClasses.split(' ').filter(className => className);

    item.classList.add(...newClasses);
  });

  return this;
}

export default addClass;
