import { isString, isFunction, diff } from '../utils';

const removeClass = function (classes) {
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
            const toRemoveClasses = passedClasses.split(' ').filter(className => className);

            item.className = diff(existClasses, toRemoveClasses).join(' ');
        }
        item.className = item.className.trim();
    });

    return this;
}

export default removeClass;