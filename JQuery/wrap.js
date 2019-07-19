import { isFunction, isString, isHTMLString, isJQuery, isElement, isNodeList, createElementFromHTML, maxDepth } from '../utils';

function getWrapFromString(item, wrapper) {
  if (isHTMLString(wrapper)) {
    const wrappingElement = createElementFromHTML(wrapper);

    return wrappingElement;
  }

  return item.querySelectorAll(wrapper);
}

function getWrapFromIterable(wrapper) {
  const depth = maxDepth(wrapper[0]);

  return wrapper[0].cloneNode(depth);
}

function getWrapFromElement(item, wrapper) {
  const newNode = item.cloneNode();

  newNode.innerHTML = item.innerHTML;
  wrapper.appendChild(newNode);
  return wrapper;
}

function makeWrap(wrappingElement, item, index) {
  let wrapper = isFunction(wrappingElement) ? wrappingElement(index) : wrappingElement;

  if (isString(wrapper)) {
    wrapper = getWrapFromString(item, wrapper);
  }

  if (isJQuery(wrapper) || isNodeList(wrapper)) {
    wrapper = getWrapFromIterable(wrapper);
  }

  if (isElement(wrapper)) {
    wrapper = getWrapFromElement(item, wrapper.cloneNode());
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
