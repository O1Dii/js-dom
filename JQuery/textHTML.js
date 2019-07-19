import { isFunction } from '../utils';

function setText(param, html, item) {
  const newText = isFunction(param) ? param(item, item.innerHTML) : param;

  if (!newText) {
    return;
  }

  if (html) {
    item.innerHTML = newText;
  } else {
    item.innerText = newText;
  }
}

function getText(html) {
  let res = '';

  if (html) {
    this.each((item) => {
      res += item.innerHTML;
    });
  } else {
    this.each((item) => {
      res += item.innerText;
    });

    return res.replace(/\n/g, '');
  }

  return res;
}

const textHTML = function (param, html = true) {
  if (param) {
    this.each(item => setText(param, html, item));
  } else {
    return getText.call(this, html);
  }

  return this;
};

export default textHTML;
