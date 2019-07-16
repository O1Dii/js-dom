const each = function (fn) {
    console.log(this);
    for (const index of Object.keys(this)) {
        fn(this[index], index);
    }
}

export default each;