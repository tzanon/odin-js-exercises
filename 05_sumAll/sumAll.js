

const sumAll = function(a, b) {

  for (n of [a, b]) {
    if (typeof n !== "number" || n < 0) return "ERROR";
  }

  let start, end;
  if (a <= b) {
    start = a;
    end = b;
  } else {
    start = b;
    end = a;
  }

  let sum = 0;
  for (let i = start; i <= end; i++) sum += i;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
