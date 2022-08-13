const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const checkAnimal = species.find((anm) => anm.name === animal);
  const ages = checkAnimal.residents;
  return ages.every((elem) => elem.age >= 7);
}
module.exports = getAnimalsOlderThan;
