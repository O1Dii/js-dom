const addClass = function (classes) {
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
};

const removeClass = function (classes) {
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
};

const append = function (...elements) {
    while (elements.some((value) => typeof value[Symbol.iterator] === 'function' && typeof value !== 'string')) {
        elements = elements.flat();
    }
    elements = elements.flat();
    for (const each of this) {
        for (const each_elem of elements) {
            const elem = document.createElement(each_elem.substring(1, each_elem.indexOf('>')));
            elem.innerHTML = each_elem.substring(each_elem.indexOf('>') + 1, each_elem.lastIndexOf('<'));
            console.log(elem);
            each.appendChild(elem);
        }
    }
    return this;
}

function $(selector) {
    if (typeof selector === 'string') {
        let res = document.querySelectorAll(selector);
        let prot = Object.getPrototypeOf(res);
        prot.addClass = addClass.bind(res);
        prot.removeClass = removeClass.bind(res);
        prot.append = append.bind(res);
        return res;
    }
    return null;
}
