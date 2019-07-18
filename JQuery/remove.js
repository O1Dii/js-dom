const remove = function (selector = '') {
  const newSelector = this.selector + selector;
  const elements = document.querySelectorAll(newSelector);

  elements.forEach(element => element.parentNode.removeChild(element));

  return this;
};

export default remove;
