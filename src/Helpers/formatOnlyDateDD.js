import { isToday, format } from 'date-fns';

export default function formateOnlyDateDD(date) {
  if (date === null || date === undefined || date === '---' || date === ' ') {
    return null;
  }

  const dateFull = date.replaceAll('-', '/');
  const dateSplit = dateFull.split(' ');
  const dateFormated = format(new Date(date.slice(0, 16)), 'yyyy-MM-dd');
  const convertToDate = Date.parse(dateSplit[0]);
  // const checkDate = isToday(convertToDate);
  return dateFormated;
  // if (checkDate !== true) {
  // }
  // return "Today " + dateSplit[1];
  // return "Today " + dateSplit[1] + " " + dateSplit[2];
}
