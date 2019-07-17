const empty = function () {
    this.each(item => {
        item.innerHTML = null;
    });
    return this;
}

export default empty;