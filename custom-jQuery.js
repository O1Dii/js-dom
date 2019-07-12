const addClass = function(classes) {
    if(typeof classes === 'string' || typeof classes === 'function'){
        for(const each in this){
            if(this.hasOwnProperty(each)){
                let addition;
                if(typeof classes === 'function'){
                    addition = classes(each, this[each].className);
                }
                else{
                    addition = classes;
                }
                if(typeof addition === 'string'){
                    if(this[each].className){
                        for(const each_class of addition.split(' ')){
                            if(this[each].className.indexOf(each_class) === -1){
                                this[each].className += ' ' + each_class;
                            }
                        }
                    }
                    else{
                        this[each].className = addition;
                    }
                }
            }
        }
    }
    return this;
};

function $(selector){
    if(typeof selector === 'string'){
        let res = document.querySelectorAll(selector);
        let prot = Object.getPrototypeOf(res);
        prot.addClass = addClass.bind(res);
        return res;
    }
    return null;
}
