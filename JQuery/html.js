import textHTML from './textHTML';

const html = function (param) {
  return textHTML.call(this, param, true);
};

export default html;
