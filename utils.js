import JQuery from "./JQuery/JQuery";

export const isString = (obj) => {
    return typeof obj === 'string';
}

export const isNumber = (obj) => {
    return typeof obj === 'number';
}

export const isNull = (obj) => {
    return obj === null;
}

export const isBoolean = (obj) => {
    return typeof obj === 'boolean';
}

export const isFunction = (obj) => {
    return typeof obj === 'function';
}

export const isElement = (obj) => {
    return obj instanceof Element;
}

export const isJQuery = (obj) => {
    return obj instanceof JQuery;
}

export const isNodeList = (obj) => {
    return obj instanceof NodeList;
}

export const isArray = (obj) => {
    return obj instanceof Array;
}

export const isHTMLString = (str) => {
    return Boolean(str.search(/.*<.+>.*<\/.+>.*/) + 1);
}

export const max = (arr) => {
    if (!isArray(arr)) {
        return null;
    }

    arr.reduce((prev, cur) => {
        if (parseInt(prev) > cur) {
            cur = prev;
        }
    });
    return arr.pop();
}

export const isPlainObject = (obj) => {
    return typeof obj === 'object' && obj.constructor === Object && obj.toString() === '[object Object]';
}

export const uniq = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

export const difference = (arr1, arr2) => {
    return arr1.array.filter(element => {
        !arr2.includes(element);
    })
}