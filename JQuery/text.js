import textHTML from './textHTML';

const text = function (param) {
  return textHTML.bind(this)(param, false);
};

export default text;
