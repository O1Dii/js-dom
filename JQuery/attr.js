import { isPlainObject, isString, isFunction, isNumber, isNull } from "../utils";

const attr = function (attrName, value) {
    if (!isPlainObject(attrName) && !isString(attrName)) {
        return this;
    }

    if (isPlainObject(attrName)) {
        const bindedObjectAttr = objectAttr.bind(this);
        return bindedObjectAttr(attrName);
    }

    if (isString(attrName)) {
        const bindedStringAttr = stringAttr.bind(this);
        return bindedStringAttr(attrName, value);
    }

    return this;
}

function objectAttr(attrName) {
    Object.entries(attrName).forEach(([key, value]) => {
        this.each(item => item.setAttribute(key, value))
    });

    return this;
}

function stringAttr(attrName, value) {
    if (value) {
        const setNewAttribute = setAttribute.bind(null, attrName, value);
        this.each(setNewAttribute);
    }
    else {
        return this.last()[0].getAttribute(attrName);
    }

    return this;
}

function setAttribute(attrName, value, item, index) {
    const newAttrValue = isFunction(value) ? value(index, item.getAttribute(attrName)) : value;
    if (isString(newAttrValue) || isNumber(newAttrValue)) {
        item.setAttribute(attrName, newAttrValue);
    }
    if (isNull(newAttrValue)) {
        item.removeAttribute(attrName);
    }
}

export default attr;