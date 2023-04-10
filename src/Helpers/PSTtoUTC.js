import Moment from 'moment';

/**
 * Timezone
 * 'PST - Pacific Standard Time UTC -7:00'
 */

export default function PSTtoUTC(dateTime) {
  const momentDate = Moment.utc(dateTime);

  const format = 'YYYY-MM-DD hh:mm:ss.ss';

  if (
    dateTime === null ||
    dateTime === undefined ||
    dateTime === '---' ||
    dateTime === ' '
  ) {
    return null;
  }
  const currentPst = Moment.utc().utcOffset(getPstOffset());
  const todayPst =
    currentPst.format('D') === momentDate.utcOffset(getPstOffset()).format('D');

  return todayPst
    ? 'Today ' +
        momentDate.utcOffset(getPstOffset()).format(format).slice(11, 21)
    : momentDate.utcOffset(getPstOffset()).format(format);
}

// get pst offset
const getPstOffset = () => {
  const stdTimezoneOffset = () => {
    var jan = new Date(0, 1);
    var jul = new Date(6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  };

  var today = new Date();

  const isDstObserved = (today) => {
    return today.getTimezoneOffset() < stdTimezoneOffset();
  };

  if (isDstObserved(today)) {
    return -8;
  } else {
    return -7;
  }
};
