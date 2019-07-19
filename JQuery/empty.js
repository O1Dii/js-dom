function empty() {
  this.each((item) => {
    item.innerHTML = null;
  });

  return this;
}

export default empty;
