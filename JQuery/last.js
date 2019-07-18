import JQuery from './JQuery';
import { max } from '../utils';

const last = function () {
  const elemKey = max(Object.keys(this));
  return new JQuery(undefined, this[elemKey]);
};

export default last;
