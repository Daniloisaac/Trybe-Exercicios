const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const namefilter = employees.filter((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  }
  return Object.assign(...namefilter);
}
module.exports = getEmployeeByName;
