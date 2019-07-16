import JQuery from './JQuery/JQuery';

function $(selector) {
    if (typeof selector === 'string') {
        return new JQuery(selector);
    }
    return null;
}
