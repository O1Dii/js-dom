import JQuery from './JQuery/JQuery';

function $(selector) {
    if (typeof selector === 'string') {
        const res = new JQuery(selector);
        return res;
    }
    return null;
}
