// import { isToday, format } from 'date-fns';

// export default function formateOnlyDate(date) {
//   if (date === null || date === undefined || date === '---' || date === ' ') {
//     return null;
//   }

//   const dateFull = date.replaceAll('-', '/');
//   const dateSplit = dateFull.split(' ');
//   const dateFormated = format(new Date(date.slice(0, 16)), 'MM/dd/yyyy');
//   const convertToDate = Date.parse(dateSplit[0]);
//   // const checkDate = isToday(convertToDate);
//   return dateFormated;
//   // if (checkDate !== true) {
//   // }
//   // return "Today " + dateSplit[1];
//   // return "Today " + dateSplit[1] + " " + dateSplit[2];
// }

import Moment from 'moment';

export default function formateOnlyDate(dateTime) {
  const momentDate = Moment.utc(dateTime);
  const format = 'MM/DD/YYYY';

  const currentPst = Moment.utc().utcOffset(getPstOffset());
  const todayPst =
    currentPst.format('D M Y') ===
    momentDate.utcOffset(getPstOffset()).format('D M Y');

  return momentDate.utcOffset(getPstOffset()).format(format);
}

const stdTimezoneOffset = () => {
  var jan = new Date(0, 1);
  var jul = new Date(6, 1);
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
};

const isDstObserved = () => {
  var today = new Date();
  return today.getTimezoneOffset() < stdTimezoneOffset();
};

// get pst offset
export const getPstOffset = () => {
  if (isDstObserved()) {
    return -8; //-7 initial value but in day light it should be -8 hrs difference the same for the rest
  } else {
    return -7; //-8 initial value but without day light it should be -7 hrs difference the same for the rest
  }
};
