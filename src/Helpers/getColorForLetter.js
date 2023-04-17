export default function getColorForLetter(colors, letter) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const colorMap = {};
  for (let i in letters) colorMap[letters[i]] = colors[i % colors.length];
  return colorMap[letter];
}
