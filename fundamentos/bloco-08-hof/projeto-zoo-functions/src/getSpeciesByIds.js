const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const arr = [];
  let getId;
  for (let i = 0; i < ids.length; i += 1) {
    getId = species.filter((animals) => (animals.id === ids[i]));
    const obj = Object.assign(...getId);
    (arr.push(obj));
  }
  return arr;
}
module.exports = getSpeciesByIds;
