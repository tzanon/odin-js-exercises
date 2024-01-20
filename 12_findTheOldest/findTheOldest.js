
/* const cases = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
] */


function age(person) {
  const currentYear = (new Date()).getFullYear();
  if (Object.hasOwn(person, "yearOfDeath"))
    return person.yearOfDeath - person.yearOfBirth;
  else
    return currentYear - person.yearOfBirth;
}

const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    const oldestAge = age(oldest);
    const personAge = age(person);
    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
