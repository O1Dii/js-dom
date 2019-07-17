const each = function (fn) {
    Object.entries(this).forEach(([key, value]) => fn(value, key));

    return this;
}

export default each;