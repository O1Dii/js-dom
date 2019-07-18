const remove = function (selector) {
  this.each(element => {
    const toRemoveArr = Object.values(
      selector ? element.parentNode.querySelectorAll(selector) : element.parentNode.children
    ).filter(item => item === element);
    toRemoveArr.forEach(item => item.parentNode.removeChild(item));
  });

  return this;
};

export default remove;
