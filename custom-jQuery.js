class JQuery {
    constructor(selector) {
        const elements = document.querySelectorAll(selector);
        for (let element in elements) {
            if (elements.hasOwnProperty(element)) {
                this[element] = elements[element];
            }
        }
    }

    [Symbol.iterator]() {
        let index = -1;
        return {
            next: () => {
                return { value: this[++index], done: !this.hasOwnProperty(index) }
            }
        }
    }

    addClass(classes) {
        if (typeof classes === 'string' || typeof classes === 'function') {
            for (const each in this) {
                if (this.hasOwnProperty(each)) {
                    let addition;
                    if (typeof classes === 'function') {
                        addition = classes(each, this[each].className);
                    }
                    else {
                        addition = classes;
                    }
                    if (typeof addition === 'string') {
                        if (this[each].className) {
                            for (const each_class of addition.split(' ')) {
                                if (this[each].className.indexOf(each_class) === -1) {
                                    this[each].className += ' ' + each_class;
                                }
                            }
                        }
                        else {
                            this[each].className = addition;
                        }
                    }
                }
            }
        }
        return this;
    }

    removeClass(classes) {
        if (typeof classes === 'string' || typeof classes === 'function') {
            for (const each in this) {
                if (this.hasOwnProperty(each)) {
                    let removing;
                    if (typeof classes === 'function') {
                        removing = classes(each, this[each].className);
                    }
                    else {
                        removing = classes;
                    }
                    if (typeof removing === 'string') {
                        if (this[each].className) {
                            this[each].className += ' '
                            for (const each_class of removing.split(' ')) {
                                if (this[each].className.indexOf(each_class + ' ') !== -1) {
                                    this[each].className = this[each].className.replace(each_class + ' ', '');
                                }
                            }
                        }
                    }
                    this[each].className = this[each].className.trim();
                }
            }
        }
        return this;
    }

    append(...elements) {
        if (elements.length === 1 && typeof elements[0] === 'function') {
            for (const each in this) {
                if (this.hasOwnProperty(each)) {
                    elements[0](each, this[each].innerHTML);
                }
            }
        }
        elements = elements.flat();
        for (const each of this) {
            console.log(each);
            for (const each_elem of elements) {
                if (typeof each_elem === 'Element') {
                    each.appendChild(each_elem);
                }
                else if (each_elem instanceof JQuery) {
                    for (let elem of each_elem) {
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

    text(param) {
        if (param) {
            if (typeof param === 'function') {
                for (each in this) {
                    if (this.hasOwnProperty(each)) {
                        const new_text = param(each, each.innerHTML);
                        if (new_text) {
                            each.innerHTML = new_text;
                        }
                    }
                }
            }
            else {
                this.innerHTML = param;
            }
        }
        else {
            let res = '';
            for (let each of this) {
                res += each.innerHTML;
            }
            return res;
        }
        return this;
    }
}

function $(selector) {
    if (typeof selector === 'string') {
        return new JQuery(selector);
    }
    return null;
}
