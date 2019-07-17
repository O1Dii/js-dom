import { isFunction } from '../utils';

const text = function (param) {
    if (param) {
        this.each((item) => {
            const new_text = isFunction(param) ? param(item, item.innerHTML) : param;
            if (new_text) {
                item.innerHTML = new_text;
            }
        });
    }
    else {
        let res = '';
        this.each((item) => {
            res += item.innerText;
        });
        return res.replace(/\s/, '');
    }
    return this;
}

export default text;