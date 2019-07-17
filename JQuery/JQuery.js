import each from './each';
import addClass from './addClass';
import removeClass from './removeClass';
import append from './append';
import remove from './remove';
import text from './text';
import attr from './attr';


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

JQuery.prototype.each = each;
JQuery.prototype.addClass = addClass;
JQuery.prototype.removeClass = removeClass;
JQuery.prototype.append = append;
JQuery.prototype.remove = remove;
JQuery.prototype.text = text;
JQuery.prototype.attr = attr;

export default JQuery;