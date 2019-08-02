import { max } from '../utils';

function last() {
  const elemKey = max(Object.keys(this));

  return new this(undefined, this[elemKey]);
}

export default last;
