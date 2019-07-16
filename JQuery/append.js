import { isFunction, isElement, isJQuery } from '../utils';

const append = function (...elements) {
    if (elements.length > 1 && isFunction(elements[0])) {
        return this;
    }

    const flattenedElements = elements.flat();
    this.each((item, index) => {
        const newElements = isFunction(elements[0]) ? elements[0](index, item.innerHTML) : flattenedElements;
        newElements.array.forEach(element => {
            if (isElement(element)) {
                item.appendChild(element);
            }
            else if (isJQuery(element)) {
                element.each(node => {
                    item.appendChild(node);
                });
            }
            else {
                item.innerHTML += element;
            }
        });
    });

    return this;
}

export default append;