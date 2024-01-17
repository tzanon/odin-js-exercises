/*
  LEAP YEARS

*/

const leapYears = function(year) {
  // a leap year is divisible by 4; if by 100 then ONLY also if by 400
  if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) return false;
  else return true;
};

// Do not edit below this line
module.exports = leapYears;
