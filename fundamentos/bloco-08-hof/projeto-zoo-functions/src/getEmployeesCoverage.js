const data = require('../data/zoo_data');

const { employees, species } = data;

const getlocations = (locations) => {
  const arrLocations = [];
  locations.forEach((element) =>
    arrLocations.push(species.find((location) => element.includes(location.id)).location));
  return arrLocations;
};
const getspecies = (spe) => {
  const arrSpe = [];
  spe.forEach((element) =>
    arrSpe.push(species.filter((specie) => element.includes(specie.id))[0].name));
  return arrSpe;
};
const arrObj = employees.map((elem) =>
  ({ fullName: `${elem.firstName} ${elem.lastName}`,
    id: `${elem.id}`,
    locations: getlocations(elem.responsibleFor),
    species: getspecies(elem.responsibleFor) }
  ));

function getEmployeesCoverage(employee) {
  if (!employee) {
    return arrObj;
  }
  const fullName = employees.filter((elem) =>
    elem.firstName.includes(employee.name) || elem.lastName.includes(employee.name)
    || elem.id.includes(employee.id));
  if (fullName.length !== 0) {
    const locations = species.filter((ell) => (fullName[0].responsibleFor.includes(ell.id)))
      .map((ba) => (ba.location));
    const animal = species.filter((ell) => (fullName[0].responsibleFor.includes(ell.id)))
      .map((ba) => (ba.name));
    return { fullName: `${fullName[0].firstName} ${fullName[0].lastName}`,
      id: `${fullName[0].id}`,
      locations,
      species: animal,
    };
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
