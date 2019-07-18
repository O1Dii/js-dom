import { isFunction, isElement, isJQuery } from '../utils';

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

const append = function (...elements) {
  const flattenedElements = elements.flat();
  this.each((item, index) => {
    const newElements = isFunction(elements[0])
      ? elements[0](index, item.innerHTML) : flattenedElements;
    newElements.forEach(element => appendEach(item, element));
  });

  return this;
};

export default append;
