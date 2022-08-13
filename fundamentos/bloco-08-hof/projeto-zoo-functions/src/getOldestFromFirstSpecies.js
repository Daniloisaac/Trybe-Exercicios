const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let oldAnimals = 0;
  const arrResult = [];
  const { employees, species } = data;
  const getEmployees = employees.find((elem) => (elem.id === id));
  const getAnimals = species.find((elem) => (getEmployees.responsibleFor.includes(elem.id)));
  for (let i = 0; i < getAnimals.residents.length; i += 1) {
    if (getAnimals.residents[i].age > oldAnimals) {
      oldAnimals = getAnimals.residents[i].age;
    }
  }
  const getAnimalsOld = getAnimals.residents.find((elem) => (elem.age === oldAnimals));
  arrResult.push(getAnimalsOld.name, getAnimalsOld.sex, getAnimalsOld.age);
  return arrResult;
}
module.exports = getOldestFromFirstSpecies;
