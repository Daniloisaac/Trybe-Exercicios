const data = require('../data/zoo_data');

const { species } = data;
const obj = {
  NE: species.filter((elem) => elem.location === 'NE')
    .map((elem) => elem.name),
  NW: species.filter((elem) => elem.location === 'NW')
    .map((elem) => elem.name),
  SE: species.filter((elem) => elem.location === 'SE')
    .map((elem) => elem.name),
  SW: species.filter((elem) => elem.location === 'SW')
    .map((elem) => elem.name) };

const nameAnimals = {
  NE: species.filter((elem) => elem.location === 'NE')
    .map((elem) => ({ [elem.name]: elem.residents.map((lem) => lem.name).sort() })),
  NW: species.filter((elem) => elem.location === 'NW')
    .map((elem) => ({ [elem.name]: (elem.residents.map((lem) => lem.name).sort()) })),
  SE: species.filter((elem) => elem.location === 'SE')
    .map((elem) => ({ [elem.name]: (elem.residents.map((lem) => lem.name).sort()) })),
  SW: species.filter((elem) => elem.location === 'SW')
    .map((elem) => ({ [elem.name]: (elem.residents.map((lem) => lem.name).sort()) })),
};
let sexAnimals;

function bora(vqv) {
  if (Object.keys(vqv).includes('includeNames') && Object.keys(vqv).includes('sex')) {
    sexAnimals = {
      NE: species.filter((elem) => elem.location === 'NE').map((elem) => ({ [elem.name]:
        (elem.residents.filter((lem) => lem.sex.includes(vqv.sex)).map((lem) => lem.name)) })),
      NW: species.filter((elem) => elem.location === 'NW').map((elem) => ({ [elem.name]:
        (elem.residents.filter((lem) => lem.sex.includes(vqv.sex)).map((lem) => lem.name)) })),
      SE: species.filter((elem) => elem.location === 'SE').map((elem) => ({ [elem.name]:
          (elem.residents.filter((lem) => lem.sex.includes(vqv.sex)).map((lem) => lem.name)) })),
      SW: species.filter((elem) => elem.location === 'SW').map((elem) => ({ [elem.name]:
         (elem.residents.filter((lem) => lem.sex.includes(vqv.sex)).map((lem) => lem.name)) })),
    };
    return sexAnimals;
  }
  if (Object.keys(vqv).includes('includeNames') && Object.keys(vqv).includes('sorted')) {
    return (nameAnimals);
  }
}
const lest = {
  NE: species.filter((elem) => elem.location === 'NE')
    .map((elem) => ({ [elem.name]: elem.residents.map((lem) => lem.name) })),
  NW: species.filter((elem) => elem.location === 'NW')
    .map((elem) => ({ [elem.name]: (elem.residents.map((lem) => lem.name)) })),
  SE: species.filter((elem) => elem.location === 'SE')
    .map((elem) => ({ [elem.name]: (elem.residents.map((lem) => lem.name)) })),
  SW: species.filter((elem) => elem.location === 'SW')
    .map((elem) => ({ [elem.name]: (elem.residents.map((lem) => lem.name)) })),
};
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return obj;
  } if (bora(options) === undefined) {
    return lest;
  } if (Object.keys(options).length === 3) {
    return {
      NE: species.filter((elem) => elem.location === 'NE').map((elem) => ({ [elem.name]:
  (elem.residents.filter((lem) => lem.sex.includes(options.sex)).map((lem) => lem.name).sort()) })),
      NW: species.filter((elem) => elem.location === 'NW').map((elem) => ({ [elem.name]:
  (elem.residents.filter((lem) => lem.sex.includes(options.sex)).map((lem) => lem.name).sort()) })),
      SE: species.filter((elem) => elem.location === 'SE').map((elem) => ({ [elem.name]:
  (elem.residents.filter((lem) => lem.sex.includes(options.sex)).map((lem) => lem.name).sort()) })),
      SW: species.filter((elem) => elem.location === 'SW').map((elem) => ({ [elem.name]:
  (elem.residents.filter((lem) => lem.sex.includes(options.sex)).map((lem) => lem.name).sort()) })),
    };
  }
  return bora(options);
}

module.exports = getAnimalMap;
