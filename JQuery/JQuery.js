import each from './each';
import last from './last';
import addClass from './addClass';
import removeClass from './removeClass';
import append from './append';
import remove from './remove';
import text from './text';
import html from './html';
import attr from './attr';
import children from './children';
import empty from './empty';
import css from './css';
import click from './click';
import wrap from './wrap';
import { isFunction } from '../utils';

class JQuery {
  constructor(selector, elements) {
    if (!elements) {
      elements = document.querySelectorAll(selector);
    }

    if (isFunction(elements[Symbol.iterator])) {
      Object.keys(elements).forEach((elementKey) => {
        this[elementKey] = elements[elementKey];
      });
    } else {
      this[0] = elements;
    }
  }

  [Symbol.iterator]() {
    let index = -1;
    return { next: () => ({ value: this[++index], done: !this[index] }) };
  }
}

JQuery.prototype.each = each;
JQuery.prototype.last = last;
JQuery.prototype.addClass = addClass;
JQuery.prototype.removeClass = removeClass;
JQuery.prototype.append = append;
JQuery.prototype.remove = remove;
JQuery.prototype.text = text;
JQuery.prototype.html = html;
JQuery.prototype.attr = attr;
JQuery.prototype.children = children;
JQuery.prototype.empty = empty;
JQuery.prototype.css = css;
JQuery.prototype.click = click;
JQuery.prototype.wrap = wrap;

export default JQuery;
