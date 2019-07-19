import JQuery from './JQuery';

const children = function (selector) {
  const allElements = [];

  this.each((item) => {
    const childElements = selector ? item.querySelectorAll(selector) : item.children;
    allElements.push(childElements);
  });

  return new JQuery(undefined, allElements);
};

export default children;
