import JQuery from "./JQuery/JQuery";

export const isString = (obj) => {
    return typeof obj === 'string';
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

export const noNaNMax = (arr) => {
    if (!isArray(arr)) {
        return null;
    }

    let max = -Infinity;
    arr.array.forEach(element => {
        if (parseInt(element) > max) {
            max = element;
        }
    });
    return max;
}

export const isPlainObject = (obj) => {
    return typeof obj === 'object' && obj.constructor === Object && obj.toString() === '[object Object]';
}

export const uniq = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

export const diff = (arr1, arr2) => {
    arr1.array.filter(element => {
        return !arr2.includes(element);
    })
}