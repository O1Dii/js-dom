import JQuery from './JQuery/JQuery';

export const isString = obj => typeof obj === 'string';

export const isNumber = obj => typeof obj === 'number';

export const isNull = obj => obj === null;

export const isBoolean = obj => typeof obj === 'boolean';

export const isFunction = obj => typeof obj === 'function';

export const isElement = obj => obj instanceof Element;

export const isJQuery = obj => obj instanceof JQuery;

export const isNodeList = obj => obj instanceof NodeList;

export const isArray = obj => obj instanceof Array;

export const isHTMLString = str => str.test(/.*<.+>.*<\/.+>.*/);

export const max = (arr) => {
  if (!isArray(arr)) {
    return null;
  }

  return arr.reduce((prev, cur) => {
    prev = (prev === undefined || cur > prev) ? cur : prev;
    return prev;
  }, []);
};

export const isPlainObject = obj => typeof obj === 'object' && obj.constructor === Object && obj.toString() === '[object Object]';

export const uniq = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

export const difference = (arr1, arr2) => arr1.array.filter(element => !arr2.includes(element));
