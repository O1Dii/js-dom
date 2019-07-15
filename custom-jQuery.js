class JQuery {
    constructor(selector) {
        this.selector = selector;
        this.elements = document.querySelectorAll(selector);
    }

    addClass(classes) {
        if (typeof classes === 'string' || typeof classes === 'function') {
            for (const each in this.elements) {
                if (this.elements.hasOwnProperty(each)) {
                    let addition;
                    if (typeof classes === 'function') {
                        addition = classes(each, this.elements[each].className);
                    }
                    else {
                        addition = classes;
                    }
                    if (typeof addition === 'string') {
                        if (this.elements[each].className) {
                            for (const each_class of addition.split(' ')) {
                                if (this.elements[each].className.indexOf(each_class) === -1) {
                                    this.elements[each].className += ' ' + each_class;
                                }
                            }
                        }
                        else {
                            this.elements[each].className = addition;
                        }
                    }
                }
            }
        }
        return this;
    }

    removeClass(classes) {
        if (typeof classes === 'string' || typeof classes === 'function') {
            for (const each in this.elements) {
                if (this.elements.hasOwnProperty(each)) {
                    let removing;
                    if (typeof classes === 'function') {
                        removing = classes(each, this.elements[each].className);
                    }
                    else {
                        removing = classes;
                    }
                    if (typeof removing === 'string') {
                        if (this.elements[each].className) {
                            this.elements[each].className += ' '
                            for (const each_class of removing.split(' ')) {
                                if (this.elements[each].className.indexOf(each_class + ' ') !== -1) {
                                    this.elements[each].className = this.elements[each].className.replace(each_class + ' ', '');
                                }
                            }
                        }
                    }
                    this.elements[each].className = this.elements[each].className.trim();
                }
            }
        }
        return this;
    }

    append(...elements) {
        if (elements.length === 1 && typeof elements[0] === 'function') {
            for (const each in this.elements) {
                if (this.elements.hasOwnProperty(each)) {
                    elements[0](each, this.elements[each].innerHTML);
                }
            }
        }
        elements = elements.flat();
        for (const each of this.elements) {
            console.log(each);
            for (const each_elem of elements) {
                if (typeof each_elem === 'Element') {
                    each.appendChild(each_elem);
                }
                else if (each_elem instanceof JQuery) {
                    for (let elem of each_elem.elements) {
                        each.appendChild(elem);
                    }
                }
                else {
                    each.innerHTML += each_elem;
                }
            }
        }
        return this;
    }

    remove(selector = '') {
        selector = this.selector + selector;
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
            element.parentNode.removeChild(element);
        }
    }
}

function $(selector) {
    if (typeof selector === 'string') {
        return new JQuery(selector);
    }
    return null;
}
