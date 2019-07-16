class JQuery {
    constructor(selector, elements) {
        if (!elements) {
            elements = document.querySelectorAll(selector);
        }

        if (typeof elements[Symbol.iterator] === 'function') {
            for (let element in elements) {
                if (elements.hasOwnProperty(element)) {
                    this[element] = elements[element];
                }
            }
        }
        else {
            this[0] = elements;
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

    each(fn) {
        for (const index of Object.keys(this)) {
            fn(this[index], index);
        }
    }

    last() {
        const elem_key = Math.max(...Object.keys(this).map(Number));
        return new JQuery(undefined, this[elem_key]);
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
                for (const each in this) {
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

    attr(attrName, value) {
        if (typeof attrName === 'object' && attrName.constructor === Object && attrName.toString() === '[object Object]') {
            for (let each of Object.keys(attrName)) {
                for (const each_elem of this) {
                    each_elem.setAttribute(each, attrName[each]);
                }
            }
        }
        else if (typeof attrName === 'string') {
            if (value) {
                let new_attr_value = value;
                if (typeof value === 'function') {
                    for (const each_elem in this) {
                        if (this.hasOwnProperty(each_elem)) {
                            new_attr_value = value(each_elem, each_elem.getAttribute(attrName));
                        }
                    }
                }
                if (['string', 'number', 'null'].indexOf(typeof new_attr_value) !== -1) {
                    if (new_attr_value) {
                        for (const each_elem of this) {
                            console.log(each_elem);
                            each_elem.setAttribute(attrName, new_attr_value);
                        }
                    }
                    else {
                        for (const each_elem of this) {
                            each_elem.removeAttribute(attrName);
                        }
                    }
                }
            }
            else {
                return this.last()[0].getAttribute(attrName);
            }
        }
        return this;
    }

    children(selector) {
        let elements = [];
        let elem;
        for (let each of this) {
            if (selector) {
                elem = each.querySelectorAll(selector);
            }
            else {
                elem = each.children;
            }
            if (elem.length !== 0) {
                for (const each_elem in elem) {
                    if (elem.hasOwnProperty(each_elem))
                        elements.push(elem[each_elem]);
                }
            }
        }
        return new JQuery(undefined, elements);
    }

    empty() {
        for (let each of this) {
            each.innerHTML = null;
        }
        return this;
    }

    css(propertyName, value) {
        if (typeof propertyName === 'object' && propertyName.constructor === Object && propertyName.toString() === '[object Object]') {
            for (let each of Object.keys(propertyName)) {
                for (const each_elem of this) {
                    each_elem.style.setProperty(each, propertyName[each]);
                }
            }
        }
        else if (propertyName instanceof Array) {
            let arr = [];
            for (const each of propertyName) {
                arr.push(this.last()[0].style.getPropertyValue(each));
            }
            return arr;
        }
        else if (typeof propertyName === 'string') {
            if (value) {
                let new_attr_value = value;
                if (typeof value === 'function') {
                    for (const each_elem in this) {
                        if (this.hasOwnProperty(each_elem)) {
                            new_attr_value = value(each_elem, each_elem.style.getProperty(propertyName));
                        }
                    }
                }
                if (['string', 'number'].indexOf(typeof new_attr_value) !== -1) {
                    for (const each_elem of this) {
                        console.log(each_elem);
                        each_elem.style.setProperty(propertyName, new_attr_value);
                    }
                }
            }
            else {
                return this.last()[0].style.getPropertyValue(propertyName);
            }
        }
        return this;
    }

    click(handlerData, handler) {
        if (handlerData) {
            if (!handler) {
                handler = handlerData;
            }
            for (const each of this) {
                each.addEventListener("click", handler);
            }
        }
        else {
            for (const each of this) {
                each.trigger("click");
            }
        }
    }
}

// JQuery.prototype.addClass = addClass;
// JQuery.prototype.removeClass = removeClass;

function $(selector) {
    if (typeof selector === 'string') {
        return new JQuery(selector);
    }
    return null;
}
