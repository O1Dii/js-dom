import { isFunction, isString, isHTMLString, isJQuery, isElement, isNodeList } from '../utils';

function stringWrap(item, wrapper) {
  if (isHTMLString(wrapper)) {
    const index = wrapper.lastIndexOf('</');
    return wrapper.substring(0, index) + item + wrapper.substring(index);
  }

  return item.querySelectorAll(wrapper);
}

function listsWrap(wrapper) {
  return wrapper[0];
}

function elementWrap(item, wrapper) {
  return wrapper.appendChild(item);
}

function makeWrap(wrappingElement, item, index) {
  let wrapper = isFunction(wrappingElement) ? wrappingElement(index) : wrappingElement;

  if (isString(wrapper)) {
    const res = stringWrap(item, wrapper);
    if (isString(res)) {
      item = res;
    } else {
      wrapper = stringWrap;
    }
  }

  if (isJQuery(wrapper) || isNodeList(wrapper)) {
    wrapper = listsWrap(wrapper);
  }

  if (isElement(wrapper)) {
    item = elementWrap(item, wrapper);
  }
}

const wrap = function (wrappingElement) {
  this.each((item, index) => makeWrap(wrappingElement, item, index));

  return this;
};

export default wrap;
