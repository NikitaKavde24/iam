import { isNaN } from 'lodash';

export default function numberWithCommas(amount = '') {
  if (amount === 0) return '0';
  if (amount === '' || isNaN(amount)) return '';
  amount = Number(amount);
  return `${amount}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ',');
}
