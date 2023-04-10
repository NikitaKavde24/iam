import { isNaN } from 'lodash';

export default function toCurrencyAmount(amount = '') {
  if (amount === 0) return '0.00';
  if (amount === '' || isNaN(amount) || amount === null || amount === undefined)
    return '';
  amount = Number(amount).toFixed(2);
  return `${amount}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
