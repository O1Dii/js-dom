const each = function (fn) {
    for (const index of Object.keys(this)) {
        fn(this[index], index);
    }
}

export default each;