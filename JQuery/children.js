import JQuery from './JQuery';

const children = function (selector) {
    let allElements = [];

    this.each((item) => {
        allElements.push(selector ? item.querySelectorAll(selector) : item.children);
    });

    return new JQuery(undefined, allElements);
}

export default children;