
// fib: 1 1 2 3 5 8 13 21 34 55 89 144
const fibonacci = function (num) {
  let n = typeof num === "number" ? num : parseInt(num);
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  const fib = fibonacci(n - 1) + fibonacci(n - 2);
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
