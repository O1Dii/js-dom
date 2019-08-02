import textHTML from './textHTML';

function text(param) {
  return textHTML.call(this, param, false);
}

export default text;
