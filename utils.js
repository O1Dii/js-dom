import JQuery from './JQuery/JQuery';

export const isString = obj => typeof obj === 'string';

export const isNumber = obj => typeof obj === 'number';

export const isNull = obj => obj === null;

export const isBoolean = obj => typeof obj === 'boolean';

export const isFunction = obj => typeof obj === 'function';

export const isElement = obj => obj instanceof Element;

export const isNodeList = obj => obj instanceof NodeList;

export const isArray = obj => obj instanceof Array;

export const isJQuery = obj => obj instanceof JQuery;

export const isPlainObject = obj => typeof obj === 'object' && obj.constructor === Object && obj.toString() === '[object Object]';

export const isHTMLString = (str) => {
  const element = document.createElement('div');
  element.innerHTML = str;

  for (let c = element.childNodes, i = c.length; i--;) {
    if (c[i].nodeType === 1) return true;
  }

  return false;
};

export const createElementFromHTML = (str) => {
  const div = document.createElement('div');
  div.innerHTML = str;

  return div.firstChild;
};

export const max = (arr) => {
  if (!isArray(arr)) {
    return null;
  }

  return arr.reduce((prev, cur) => ((prev === undefined || cur > prev) ? cur : prev), []);
};

export const uniq = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

export const difference = (arr1, arr2) => arr1.filter(element => !arr2.includes(element));
