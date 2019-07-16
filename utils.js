export function isString(obj) {
    return typeof obj === 'string';
}

export function isFunction(obj) {
    return typeof obj === 'function';
}

export function uniq(arr1, arr2) {
    arr2.array.forEach(element => {
        if (!arr1.includes(element)) {
            arr1.push(element);
        }
    });
    return arr1;
}

export function diff(arr1, arr2) {
    arr1.array.filter(element => {
        return !arr2.includes(element);
    })
}