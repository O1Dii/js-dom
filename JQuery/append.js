import { isFunction, isElement, isJQuery } from '../utils';

const append = function (...elements) {
    const flattenedElements = elements.flat();
    this.each((item, index) => {
        const newElements = isFunction(elements[0]) ? elements[0](index, item.innerHTML) : flattenedElements;
        const appendEachItem = appendEach.bind(null, item);
        newElements.forEach(appendEachItem);
    });

    return this;
}

function appendEach(item, element) {
    if (!isElement(element) && !isJQuery(element)) {
        item.innerHTML += element;
        return;
    }

    if (isElement(element)) {
        item.appendChild(element);
        return;
    }

    if (isJQuery(element)) {
        element.each(item.appendChild);
    }
}

export default append;