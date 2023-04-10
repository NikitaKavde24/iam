import { isToday, format } from 'date-fns';

export default function (date) {
  if (date === null || date === undefined || date === '---' || date === ' ') {
    return null;
  }
  const dateFormat = format(new Date(date), 'MM/dd/yyyy - hh:mm a');
  const checkDate = isToday(new Date(date));
  if (checkDate !== true) {
    return dateFormat;
  }
  return 'Today - ' + dateFormat.slice(12, 21);
}
