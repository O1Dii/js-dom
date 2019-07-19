import textHTML from './textHTML';

const text = function (param) {
  return textHTML.call(this, param, false);
};

export default text;
