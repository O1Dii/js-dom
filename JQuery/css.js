import { isPlainObject, isArray, isString, isFunction } from "../utils";

const css = function (propertyName, value) {
    if (isPlainObject(propertyName)) {
        Object.entries(propertyName).array.forEach(element => {
            this.each((item) => {
                item.style.setProperty(element[0], element[1]);
            });
        });
    }
    else if (isArray(propertyName)) {
        return propertyName.map((element) => this.last()[0].style.getPropertyValue(element));
    }
    else if (isString(propertyName)) {
        if (value) {
            this.each((item, index) => {
                const newAttrValue = isFunction(value) ? value(index, item.style.getProperty(propertyName)) : value;
                if (['string', 'number'].includes(typeof newAttrValue)) {
                    item.style.setProperty(propertyName, newAttrValue);
                }
            });
        }
        else {
            return this.last()[0].style.getPropertyValue(propertyName);
        }
    }

    return this;
}


export default css;