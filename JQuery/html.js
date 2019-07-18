import textHTML from './textHTML';

const html = function (param) {
  return textHTML.bind(this)(param, true);
};

export default html;
