import { isPlainObject, isString, isFunction, isNumber, isNull } from '../utils';

function objectAttr(attrName) {
  Object.entries(attrName).forEach(([key, value]) => {
    this.each(item => item.setAttribute(key, value));
  });

  return this;
}

function setAttribute(attrName, value, item, index) {
  const newAttrValue = isFunction(value) ? value(index, item.getAttribute(attrName)) : value;
  if (isString(newAttrValue) || isNumber(newAttrValue)) {
    item.setAttribute(attrName, newAttrValue);
  }
  if (isNull(newAttrValue)) {
    item.removeAttribute(attrName);
  }
}

function stringAttr(attrName, value) {
  if (value) {
    this.each((item, index) => setAttribute(attrName, value, item, index));
  } else {
    return this.last()[0].getAttribute(attrName);
  }

  return this;
}

const attr = function (attrName, value) {
  if (!isPlainObject(attrName) && !isString(attrName)) {
    return this;
  }

  if (isPlainObject(attrName)) {
    const bindedObjectAttr = objectAttr.bind(this);
    return bindedObjectAttr(attrName);
  }

  if (isString(attrName)) {
    const bindedStringAttr = stringAttr.bind(this);
    return bindedStringAttr(attrName, value);
  }

  return this;
};

export default attr;
