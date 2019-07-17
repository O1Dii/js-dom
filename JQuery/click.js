const click = function (handlerData, handler) {
    if (handlerData) {
        if (!handler) {
            handler = handlerData;
        }

        this.each((item) => {
            item.addEventListener("click", handler);
        });
    }
    else {
        this.each((item) => {
            item.trigger("click");
        });
    }

    return this;
}


export default click;