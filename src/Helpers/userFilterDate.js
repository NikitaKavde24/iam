import Moment from 'moment';

/**
 * Timezone
 * 0 = 'PST - Pacific Standard Time UTC -7:00'
 * 1 = 'MST - Mountain Standard Time UTC -6:00'
 * 2 = 'CST - Central Standard Time UTC -5:00'
 * 3 = 'EST - Eastern Standard Time UTC -4:00'
 * 4 = 'HST - Hawaii-Aleutian Standard Time UTC -10:00'
 */

export default function userFilterDate(dateTime) {
  const momentDate = Moment.utc(dateTime);
  const format = 'YYYY-MM-DD HH:mm:ss.ss';
  return momentDate.utcOffset(getPstOffset()).format(format);
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
    return -8; //-7 initial value but in day light it should be -8 hrs difference the same for the rest
  } else {
    return -7; //-8 initial value but without day light it should be -7 hrs difference the same for the rest
  }
};
