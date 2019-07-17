import { isString, isFunction, uniq } from '../utils';

const addClass = function (classes) {
    if (!isString(classes) && !isFunction(classes)) {
        return this;
    }

    this.each((item, index) => {
        const newClasses = isFunction(classes) ? classes(index, item.className) : classes;
        if (!isString(newClasses)) {
            return this;
        }

        if (item.className) {
            const existClasses = item.className.split(' ').filter(className => className);

            item.className = uniq(existClasses, newClasses.split(' ')).join(' ');
        } else {
            item.className = newClasses;
        }
    });

    return this;
}

export default addClass;