const reverseString = function(str) {
  if (str.length <= 1) return str;

  let revChars = str.split("").reverse();
  let revStr = "";

  for (ch of revChars) {
    revStr += ch;
  }

  return revStr;
};

// Do not edit below this line
module.exports = reverseString;
