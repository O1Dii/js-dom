function children(selector) {
  const allElements = [];

  this.each((item) => {
    const childElements = selector ? item.querySelectorAll(selector) : item.children;

    allElements.push(childElements);
  });

  return new this(undefined, allElements);
}

export default children;
