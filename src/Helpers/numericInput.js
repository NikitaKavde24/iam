export default function numericInput(input = '') {
  if (!input) return '';
  //Regular expression allowing only numbers and one decimal
  return `${input}`.replace(/[^0-9.]|\.(?=.*\.)/g, '');
  //Old regular expression
  // return `${input}`.replace(/[^\d.]/g, '');
}
