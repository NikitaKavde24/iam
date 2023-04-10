import { isToday, format } from 'date-fns';

export default function formatDate(date) {
  if (date === null || date === undefined || date === '---' || date === ' ') {
    return null;
  }

  const dateFull = date.replaceAll('-', '/');
  const dateSplit = dateFull.split(' ');
  const dateFormated = format(
    new Date(date.slice(0, 16)),
    'MM/dd/yyyy - hh:mm:ss'
  );
  const convertToDate = Date.parse(dateSplit[0]);
  const checkDate = isToday(convertToDate);
  if (checkDate !== true) {
    return dateFormated;
  }
  return 'Today ' + dateSplit[1];
  // return "Today " + dateSplit[1] + " " + dateSplit[2];
}
