import addClass from './JQuery/addClass';
import removeClass from './JQuery/removeClass';
import each from './JQuery/each';

class JQuery {
    constructor(selector, elements) {
        if (!elements) {
            elements = document.querySelectorAll(selector);
        }

        if (typeof elements[Symbol.iterator] === 'function') {
            for (const elementKey of Object.keys(elements)) {
                this[elementKey] = elements[elementKey];
            }
        }
        else {
            this[0] = elements;
        }
    }

    [Symbol.iterator]() {
        let index = -1;
        return {
            next: () => {
                return { value: this[++index], done: !this[index] };
            }
        }
    }
}

JQuery.prototype.addClass = addClass;
JQuery.prototype.removeClass = removeClass;
JQuery.prototype.each = each;

export default JQuery;