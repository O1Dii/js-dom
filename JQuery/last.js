import JQuery from './JQuery';
import { noNaNMax } from '../utils';

const last = function () {
    const elemKey = noNaNMax(Object.keys(this));
    return new JQuery(undefined, this[elemKey]);
}


export default last;