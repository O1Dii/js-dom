import { isString, isFunction, diff } from '../utils';

const removeClass = function (classes) {
    if (!isString(classes) && !isFunction(classes)) {
        return this;
    }

    this.each((item, index) => {
        const toRemoveClasses = isFunction(classes) ? classes(index, item.className) : classes;
        if (!isString(toRemoveClasses)) {
            return;
        }
        if (item.className) {
            const existClasses = item.className.split(' ').filter(className => className);

            item.className = diff(existClasses, toRemoveClasses.split(' ')).join(' ');
        }
        item.className = item.className.trim();
    });

    return this;
}

export default removeClass;