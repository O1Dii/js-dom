import { isPlainObject, isArray, isString, isFunction, isNumber } from '../utils';

function objectCss(propertyName) {
  Object.entries(propertyName).forEach(([key, value]) => {
    this.each(item => item.style.setProperty(key, value));
  });

  return this;
}

function arrayCss(property) {
  return property.map(element => this.last()[0].style.getPropertyValue(element));
}

function setProperty(propertyName, value, item, index) {
  const newAttrValue = isFunction(value)
    ? value(index, item.style.getProperty(propertyName)) : value;

  if (isString(newAttrValue) || isNumber(newAttrValue)) {
    item.style.setProperty(propertyName, newAttrValue);
  }
}

function stringCss(propertyName, value) {
  if (value) {
    const setNewProperty = setProperty.bind(null, propertyName, value);

    this.each(setNewProperty);
  } else {
    return this.last()[0].style.getPropertyValue(propertyName);
  }

  return this;
}

const css = function (propertyName, value) {
  if (isPlainObject(propertyName)) {
    return objectCss.call(this, propertyName);
  }

  if (isArray(propertyName)) {
    return arrayCss.call(this, propertyName);
  }

  if (isString(propertyName)) {
    return stringCss.call(this, propertyName, value);
  }

  return this;
};

export default css;
