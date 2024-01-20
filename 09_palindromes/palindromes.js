
const punctuation = " .,!?:;'\"\\/".split("");
const lettersNumbers = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

const palindromes = function (str) {
  const chars = str.toLowerCase().split("");
  // const chars = [""];
  let i = 0, j = chars.length - 1;
  
  while (i < j) {
    while (punctuation.includes(chars[i])) {
      i++;
    }
    while (punctuation.includes(chars[j])) {
      j--;
    }
    if (chars[i] !== chars[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
