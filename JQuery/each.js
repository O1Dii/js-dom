const each = function (fn) {
    Object.entries(this).array.forEach(element => {
        fn(element[1], element[0]);
    });

    return this;
}

export default each;