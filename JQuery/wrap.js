import { isFunction, isString, isHTMLString, isJQuery, isElement, isNodeList, createElementFromHTML } from '../utils';

function stringWrap(item, wrapper) {
  if (isHTMLString(wrapper)) {
    const wrappingElement = createElementFromHTML(wrapper);
    return wrappingElement;
  }

  return item.querySelectorAll(wrapper);
}

function listsWrap(wrapper) {
  return wrapper[0];
}

function elementWrap(item, wrapper) {
  const newNode = item.cloneNode();
  newNode.innerHTML = item.innerHTML;
  wrapper.appendChild(newNode);
  return wrapper;
}

function makeWrap(wrappingElement, item, index) {
  let wrapper = isFunction(wrappingElement) ? wrappingElement(index) : wrappingElement;

  if (isString(wrapper)) {
    wrapper = stringWrap(item, wrapper);
  }

  if (isJQuery(wrapper) || isNodeList(wrapper)) {
    wrapper = listsWrap(wrapper);
  }

  if (isElement(wrapper)) {
    wrapper = elementWrap(item, wrapper);
  }

  return wrapper;
}

const wrap = function (wrappingElement) {
  this.each((item, index) => {
    const element = makeWrap(wrappingElement, item, index);
    item.replaceWith(element);
  });

  return this;
};

export default wrap;
