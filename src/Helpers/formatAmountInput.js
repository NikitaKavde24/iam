import { isNaN } from 'lodash';

export default function formatAmountInput(amount = '') {
  if (!amount || !Number(amount)) return '';
  amount = Number(amount).toFixed(2);
  return `${amount}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
