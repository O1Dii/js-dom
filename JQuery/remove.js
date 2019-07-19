const remove = function (selector) {
  this.each(element => {
    const siblings = selector ? element.parentNode.querySelectorAll(selector) : element.parentNode.children;
    Object.values(siblings)
      .filter(item => item === element)
      .forEach(item => item.parentNode.removeChild(item));
  });

  return this;
};

export default remove;
