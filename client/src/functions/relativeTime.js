import jstz from 'jstz';
import moment from 'moment';
import 'moment-timezone';

export default function relativeTime(dt) {
    let currTz = sessionStorage.getItem('timezone');
    return moment(dt).tz(currTz)
}
