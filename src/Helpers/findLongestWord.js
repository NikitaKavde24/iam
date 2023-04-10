export function findLongestWord(str) {
  var longestWord = 0;
  if (!str) {
    return longestWord;
  }
  var strSplit = str.split(' ');
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
