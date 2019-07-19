import { isFunction, isElement } from '../utils';

function appendChildElements(item, element) {
  if (isElement(element)) {
    item.appendChild(element);
    return;
  }

  if (element instanceof this) {
    element.each(item.appendChild);
    return;
  }

  item.innerHTML += element;
}

function append(...elements) {
  const flattenedElements = elements.flat();

  this.each((item, index) => {
    const newElements = isFunction(elements[0])
      ? elements[0](index, item.innerHTML) : flattenedElements;

    newElements.forEach(element => appendChildElements(item, element));
  });

  return this;
}

export default append;
