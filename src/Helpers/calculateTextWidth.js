// calculate text width with font-size: 80px and font-weight: 700
// it is specifically used for calculating the width of the dollar field and the cyn field
// please do not modify this function unless you know what you are doing
// it will impact Pay/Request, Buy Tokens, and Withdraw tokens

export const calculateTextWidth = (text, smallerFont = false) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `700 ${smallerFont ? '60px' : '80px'} Open Sans`;
  return context.measureText(text).width + 10;
};
