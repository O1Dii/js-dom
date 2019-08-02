function click(handlerData, handler) {
  if (handlerData) {
    const bindedHandler = handler ? handler.bind(null, handlerData) : handlerData;

    this.each(item => item.addEventListener('click', bindedHandler));
  } else {
    this.each(item => item.trigger('click'));
  }

  return this;
}

export default click;
