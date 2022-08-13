const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (animal === undefined) {
    return species.reduce((elem, { name, residents }) =>
      ({ ...elem, [name]: residents.length }), {});
  } if (animal.sex === undefined) {
    const getName = species.filter((speci) => (speci.name === animal.specie));
    return getName[0].residents.length;
  }
  const getAnimal = species.filter((speci) => (speci.name === animal.specie));
  const getSex = getAnimal[0].residents.filter((seex) => (seex.sex === animal.sex));
  return getSex.length;
}
module.exports = countAnimals;
