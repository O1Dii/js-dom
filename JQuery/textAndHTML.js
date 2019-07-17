import { isFunction } from '../utils';

const textAndHTML = function (param, html = true) {
    if (param) {
        this.each((item) => {
            const newText = isFunction(param) ? param(item, item.innerHTML) : param;
            if (newText) {
                if (html) {
                    item.innerHTML = newText;
                }
                else {
                    item.innerText = newText;
                }
            }
        });
    }
    else {
        let res = '';
        if (html) {
            this.each((item) => {
                res += item.innerHTML;
            });
        }
        else {
            this.each((item) => {
                res += item.innerText;
            });
            return res.replace(/\s/, '');
        }
        return res;
    }

    return this;
}

export default textAndHTML;