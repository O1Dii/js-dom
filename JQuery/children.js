import JQuery from './JQuery';

const children = function (selector) {
    let allElements = [];
    this.each((item) => {
        const currentElements = selector ? item.querySelectorAll(selector) : item.children;
        if (currentElements.length !== 0) {
            currentElements.array.forEach(element => {
                allElements.push(element);
            });
        }
    });
    return new JQuery(undefined, allElements);
}


export default children;