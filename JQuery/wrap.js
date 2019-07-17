import { isFunction, isString, isHTMLString, isJQuery, isElement, isNodeList } from '../utils';

const wrap = function (wrappingElement) {
    let wrapper;

    this.each((item, index) => {
        wrapper = isFunction(wrappingElement) ? wrappingElement(index) : wrappingElement;
        if (isString(wrapper)) {
            if (isHTMLString(wrapper)) {
                const index = wrapper.lastIndexOf('</');
                item = wrapper.substring(0, index) + item + wrapper.substring(index);
                return this;
            }
            else {
                wrapper = item.querySelectorAll(wrapper);
            }
        }

        if (isJQuery(wrapper) || isNodeList(wrapper)) {
            wrapper = wrapper[0];
        }

        if (isElement(wrapper)) {
            item = wrapper.appendChild(item);
        }
    });

    return this;
}


export default wrap;