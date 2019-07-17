const click = function (handlerData, handler) {
    if (handlerData) {
        const bindedHandler = !handler ? handlerData : handler.bind(null, handlerData);
        this.each(item => item.addEventListener("click", bindedHandler));
    }
    else {
        this.each(item => item.trigger("click"));
    }

    return this;
}

export default click;