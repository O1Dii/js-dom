import { isFunction } from '../utils';

const textAndHTML = function (param, html = true) {
    if (param) {
        this.each((item) => {
            const new_text = isFunction(param) ? param(item, item.innerHTML) : param;
            if (new_text) {
                if (html) {
                    item.innerHTML = new_text;
                }
                else {
                    item.innerText = new_text;
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