import {
  isPlainObject, isString, isFunction, isNumber, isNull,
} from '../utils';

function setAttr(attrName, value, item, index) {
  const newAttrValue = isFunction(value) ? value(index, item.getAttribute(attrName)) : value;

  if (isString(newAttrValue) || isNumber(newAttrValue)) {
    item.setAttribute(attrName, newAttrValue);
  }

  if (isNull(newAttrValue)) {
    item.removeAttribute(attrName);
  }
}

function setAttrFromObj(attrName) {
  Object.entries(attrName).forEach(([name, value]) => {
    this.each((item, index) => setAttr(name, value, item, index));
  });

  return this;
}

function setAttrFromString(attrName, value) {
  if (value) {
    this.each((item, index) => setAttr(attrName, value, item, index));
  } else {
    return this.last()[0].getAttribute(attrName);
  }

  return this;
}

function attr(attrName, value) {
  if (isPlainObject(attrName)) {
    return setAttrFromObj.call(this, attrName);
  }

  if (isString(attrName)) {
    return setAttrFromString.call(this, attrName, value);
  }

  return this;
}

export default attr;
