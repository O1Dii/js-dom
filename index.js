import JQuery from './JQuery/JQuery';

function $(selector) {
    if (typeof selector === 'string') {
        const res = new JQuery(selector);
        return res;
    }
    return null;
}

let a = $('div');
a.addClass('newClass anotherNewClass');
console.log(a);
a.removeClass('anotherNewClass');
console.log(a);
a.removeClass('newClass anotherNewClass');
console.log(a);
a.append(['<h1>Title</h1>', '<p>New paragraph</p>'], '<p>Another paragraph</p>');
console.log(a);
a.attr('style', 'background-color: red;');
console.log(a);
console.log(a.children());
console.log(a.children('p'));
a.css('color', 'white');
a.css({ 'border': '10px solid green' });
console.log(a.css('border'));
// a.empty();
console.log(a.html());
console.log(a.text());
// a.text('hi');
console.log(a.last());
let b = $('p');
// b.remove('.p-tag');
// b.remove();
b.wrap('<span style="background-color: yellow"></span>');

