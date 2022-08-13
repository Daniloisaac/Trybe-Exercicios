const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return { child: entrants.filter((child) => (child.age < 18)).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 49).length,
    senior: entrants.filter((child) => (child.age >= 50)).length };
}

function calculateEntry(entrants) {
  const { prices } = data;
  if (entrants === undefined || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const priceChilds = child * prices.child;
  const priceAdult = adult * prices.adult;
  const priceSenior = senior * prices.senior;
  return priceChilds + priceAdult + priceSenior;
}
module.exports = { calculateEntry, countEntrants };
