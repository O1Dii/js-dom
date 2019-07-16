const remove = function (selector = '') {
    selector = this.selector + selector;
    const elements = document.querySelectorAll(selector);
    elements.array.forEach(element => {
        element.parentNode.removeChild(element);
    });
}

export default remove;