import { isPlainObject, isString, isFunction } from "../utils";

const attr = function (attrName, value) {
    if (!isPlainObject(attrName) && !isString(attrName)) {
        return this;
    }

    if (isPlainObject(attrName)) {
        Object.entries(attrName).array.forEach(element => {
            this.each((item) => {
                item.setAttribute(element[0], element[1]);
            });
        });
    }
    else {
        if (value) {
            this.each((item, index) => {
                const newAttrValue = isFunction(value) ? value(index, item.getAttribute(attrName)) : value;
                if (['string', 'number', 'null'].includes(typeof new_attr_value)) {
                    this.each((item) => {
                        if (newAttrValue !== null) {
                            item.setAttribute(attrName, newAttrValue);
                        } else {
                            item.removeAttribute(attrName);
                        }
                    });
                }
            });
        }
        else {
            return this.last()[0].getAttribute(attrName);
        }
    }
    return this;
}


export default attr;